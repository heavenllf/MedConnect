using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Domain.Implement;
using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Website.Models;
using MedicalTechnology.ServicePlatform.Data.Operator.Arguments;
using MedicalTechnology.ServicePlatform.Website.WebHtmlHelpers;
using MedicalTechnology.ServicePlatform.Domain.PageCache;
using MedicalTechnology.ServicePlatform.Utilities.Log;
using MedicalTechnology.ServicePlatform.Website.Attributes;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class UsersController : Controller
    {
        private IUsersRepository repository;
        public UsersController(IUsersRepository repo)
        {
            repository = repo;
        }
        UserListViewModel BuildListModel(UserConditionViewModel Conditionmodel, int page = 1)
        {
            UserListViewModel model = new UserListViewModel();
            {
                model.UserConditionModel = Conditionmodel;
                model.Usermodel = new UserViewModel();
                model.Usermodel.departments = repository.LoadDepartments();
                model.Usermodel.organizations = repository.LoadOrgazations();
                model.Usermodel.Roles =repository.LoadRoles();
                model.Usermodel.ViewType = (int)emUserViewType.ListView;
                UserConditionArg arg = new UserConditionArg();
                arg.UserID = Conditionmodel.UserID;
                arg.UserName = Conditionmodel.UserName;
                arg.Sex = Conditionmodel.Sex;
                arg.Page = page;
                arg.PageSize = PagingHelpers.PageSize;
                int TotalItems = 0;
                model.Users = repository.UsersOperator.Query(arg, out TotalItems);
                model.PagingInfo = new PageInfo
                {
                    CurentPage = page,
                    ItemsPerPage = PagingHelpers.PageSize,
                    TotalItem = TotalItems
                };
            }
            return model;
        }
        // GET: Users
        public ActionResult UserLists(UserConditionViewModel Conditionmodel, int page = 1)
        {
            return View(BuildListModel(Conditionmodel,page));
        }
        public PartialViewResult PartialUserList(UserConditionViewModel Conditionmodel, int page = 1)
        {
            return PartialView(BuildListModel(Conditionmodel, page));
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                repository.Dispose();
            }
            base.Dispose(disposing);
        }
        // GET: Users/Details/5
        public ActionResult Details(string UserID)
        {
            User user = repository.UsersOperator.Query(UserID);
            //if (user == null)
            //{
            //    return HttpNotFound();
            //}
            UserViewModel model = new UserViewModel();
            {
                model.User = user;
            }
            return View(model);
        }

        // GET: Users/Create
        public ActionResult Create()
        {
            UserViewModel model = new UserViewModel();
            {
                model.departments = repository.LoadDepartments();
                model.organizations = repository.LoadOrgazations();
                model.Roles = repository.LoadRoles();
                model.ViewType = (int)emUserViewType.NoView;
            }
            return View(model);
        }

        // POST: Users/Create
        // 为了防止“过多发布”攻击，请启用要绑定到的特定属性，有关 
        // 详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(UserViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    if (model.SelectedDepartmentID > 0)
                        model.User.Department = repository.LoadDepartments().Where(x => x.ID == model.SelectedDepartmentID).Single();
                    if (model.SelectedOrgID > 0)
                        model.User.Organization = repository.LoadOrgazations().Where(x => x.ID == model.SelectedOrgID).Single();
                    if (model.SelectedRoleID > 0)
                        model.User.UserRole = repository.LoadRoles().Where(x => x.ID == model.SelectedRoleID).Single();
                    repository.UsersOperator.Add(model.User);
                    if (model.ViewType == (int)emUserViewType.PersonView)
                    {
                        return RedirectToAction("PersionInfo", new { UserID = model.User.UserID });
                    }
                    else if(model.ViewType == (int)emUserViewType.DetailView)
                    {
                        return RedirectToAction("Details", new { UserID = model.User.UserID });
                    }
                    else if (model.ViewType == (int)emUserViewType.ListView)
                        return RedirectToAction("UserLists");
                    else
                    {
                        TempData["messagetype"] = "1";
                        TempData["message"] = "用户添加成功";
                        model = new UserViewModel();
                        model.ViewType = (int)emUserViewType.NoView;            
                    }

                }
                catch (Exception)
                {
                    TempData["messagetype"] = "0";
                    TempData["message"] = "用户添加失败，请重试";
                }
            }
            model.departments = repository.LoadDepartments();
            model.organizations = repository.LoadOrgazations();
            model.Roles = repository.LoadRoles();
            return View(model);
        }

        // GET: Users/Edit/5
        public ActionResult Edit(string UserID,int ViewType)
        {
            User user = repository.UsersOperator.Query(UserID);
            if (user == null)
            {
                return HttpNotFound();
            }
            UserViewModel model = new UserViewModel();
            {
                model.User = user;
                model.ViewType = ViewType;
                model.departments = repository.LoadDepartments();
                model.organizations = repository.LoadOrgazations();
                model.Roles = repository.LoadRoles();
                model.SelectedDepartmentID = user.Department == null ?0:user.Department.ID;
                model.SelectedOrgID = user.Organization == null ? 0 : user.Organization.ID;
                model.SelectedRoleID = user.UserRole == null ? 0 : user.UserRole.ID;
            }
            return View(model);
        }

        // POST: Users/Edit/5
        // 为了防止“过多发布”攻击，请启用要绑定到的特定属性，有关 
        // 详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(UserViewModel model)
        {
            model.departments = repository.LoadDepartments();
            model.organizations = repository.LoadOrgazations();
            model.Roles = repository.LoadRoles();
            if (ModelState.IsValid)
            {
                if (model.SelectedDepartmentID > 0)
                   model.User.Department = repository.LoadDepartments().Where(x => x.ID == model.SelectedDepartmentID).Single();
                if (model.SelectedOrgID > 0)
                   model.User.Organization = repository.LoadOrgazations().Where(x => x.ID == model.SelectedOrgID).Single();
                if (model.SelectedRoleID > 0)
                   model.User.UserRole = repository.LoadRoles().Where(x => x.ID == model.SelectedRoleID).Single();
                repository.UsersOperator.Edit(model.User);
                if (model.ViewType == (int)emUserViewType.PersonView)
                {
                    return RedirectToAction("PersionInfo", new { UserID = model.User.UserID });
                }
                else if (model.ViewType == (int)emUserViewType.DetailView)
                {
                    return RedirectToAction("Details", new { UserID = model.User.UserID });
                }
                else if (model.ViewType == (int)emUserViewType.ListView)
                   return RedirectToAction("UserLists");
            }
            return View(model);
        }

        // GET: Users/Delete/5
        public ActionResult Delete(string UserID)
        {
            if (UserID == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            User user = repository.UsersOperator.Query(UserID);
            if (user == null)
            {
                return HttpNotFound();
            }
            UserViewModel model = new UserViewModel();
            {
                model.User = user;
            }
            return View(model);
        }

        // POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string UserID)
        {
            User user = repository.UsersOperator.Query(UserID);
            if (!repository.UsersOperator.IsCanDelete(user))
            {
                UserViewModel model = new UserViewModel();
                {
                    TempData["USERmessage"] = "该用户已经被使用，不能删除！";
                    model.User = user;
                }
                return View(model);
            }
            repository.UsersOperator.Delete(user);
            return RedirectToAction("UserLists");
        }

        public ActionResult PersionInfo(string UserID)
        {
            User user = repository.UsersOperator.Query(UserID);
            UserViewModel model = new UserViewModel();
            {
                model.User = user;
            }
            return View(model);
        }
        public ActionResult AccountInfo(string UserID)
        {
            User user = repository.UsersOperator.Query(UserID);
            AcountInfoViewModel model = new AcountInfoViewModel();
            {
                model.UserID = user.UserID;
            }
            return View(model);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult AccountInfo(AcountInfoViewModel model)
        {
            if (ModelState.IsValid)
            {
                try 
	            {
                    User user = repository.UsersOperator.Query(model.UserID);
                    user.Password = model.Password;
                    repository.UsersOperator.Edit(user);
                    TempData["messagetype"] = "1";
                    TempData["message"]="账户修改成功";	
	            }
	            catch (Exception)
	            {		
		            TempData["messagetype"] = "0";
                    TempData["message"] = "账户修改失败，请重试";
	            }

            }
            return View(model);
        }
        [HttpPost]
        public JsonResult GetUserIDExistState(string UserID)
        {
            bool bret = false;
            try
            {
                if (repository.UsersOperator.IsExistUID(UserID))
                    bret = true; ;
            }
            catch (Exception ex)
            {
                LoggerMgr.Instance.WriteErrorLog("Get user state error:"+ex.Message);
            }
            return Json(new { IsExist = bret });
        }
      }
}
