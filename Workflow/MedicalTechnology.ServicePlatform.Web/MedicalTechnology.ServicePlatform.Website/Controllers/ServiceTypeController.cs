using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Website.Attributes;
using MedicalTechnology.ServicePlatform.Website.Models;
using MedicalTechnology.ServicePlatform.Website.WebHtmlHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class ServiceTypeController : Controller
    {
        private IServiceTypeSrv repository;
        public ServiceTypeController(IServiceTypeSrv repo)
        {
            repository = repo;
        }
        private IEnumerable<ServiceType> ServiceTypes
        {
            get { return repository.ServiceTypes; }
        }
        // GET: ServiceType
        public ActionResult STIndex(int page = 1)
        {
            ServiceTypeListViewModel model = new ServiceTypeListViewModel();
            {
                model.ServerTypes = ServiceTypes.OrderBy(p => p.ID).Skip((page - 1) * PagingHelpers.PageSize).Take(PagingHelpers.PageSize);
                int TotalItems = ServiceTypes.Count();
                model.ReturnUrl = HttpContext.Request.Url.PathAndQuery;
                model.PagingInfo = new PageInfo
                {
                    CurentPage = page,
                    ItemsPerPage = PagingHelpers.PageSize,
                    TotalItem = TotalItems
                };
            }
            return View(model);
        }
        private void BuildWorkFlowGroups(ServiceTypeViewModel model)
        {
            IList<WorkflowGroup> groups = repository.LoadWorkflowGroups();
            List<SelectListItem> listitems = new List<SelectListItem>();
            foreach (var group in groups)
            {
                SelectListItem item = new SelectListItem();
                item.Value = group.ID.ToString();
                item.Text = group.Name;
                listitems.Add(item);
            }
            SelectList list = new SelectList(listitems, "Value", "Text", model.SelectedWFID);
            model.WorkFlowGroups = list;
        }
        public ActionResult STCreate()
        {
            ServiceTypeViewModel model = new ServiceTypeViewModel();
            BuildWorkFlowGroups(model);
            return View(model);
        }
        // POST: Orders/Create
        // 为了防止“过多发布”攻击，请启用要绑定到的特定属性，有关 
        // 详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult STCreate(ServiceTypeViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.ServerType.Group = repository.LoadWorkflowGroups().Where(x => x.ID == model.SelectedWFID).Single();
                repository.AddServerType(model.ServerType, model.Images);
                return RedirectToAction("STIndex");
            }

            return View(model);
        }
        // GET: Orders/Edit/5
        public ActionResult STEdit(string id,string returnUrl)
        {
            ServiceType servicetype = repository.ServiceTypeOperator.Query(id);
            if (servicetype == null)
            {
                return HttpNotFound();
            }
            ServiceTypeViewModel model = new ServiceTypeViewModel();
            {
                model.ServerType = servicetype;
                model.ReturnUrl =returnUrl;
                BuildWorkFlowGroups(model);
                model.SelectedWFID = servicetype.Group.ID;

            }
            return View(model);
        }

        // POST: Orders/Edit/5
        // 为了防止“过多发布”攻击，请启用要绑定到的特定属性，有关 
        // 详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult STEdit(ServiceTypeViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.ServerType.Group=repository.LoadWorkflowGroups().Where(x => x.ID == model.SelectedWFID).Single();
                repository.EditServerType(model.ServerType,model.Images);
                return RedirectToAction("STIndex");
            }
            return View(model);
        }

        // GET: Orders/Delete/5
        public ActionResult STDelete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ServiceType servicetype = repository.ServiceTypeOperator.Query(id);
            if (servicetype == null)
            {
                return HttpNotFound();
            }
            ServiceTypeViewModel model = new ServiceTypeViewModel();
            {
                model.ServerType = servicetype;
            }
            return View(model);
        }

        // POST: Orders/Delete/5
        [HttpPost, ActionName("STDelete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            ServiceType servicetype = repository.ServiceTypeOperator.Query(id);
            if(!repository.ServiceTypeOperator.IsCanDelete(servicetype))
            {
                 ServiceTypeViewModel model = new ServiceTypeViewModel();
                 {
                     TempData["STmessage"] = "该服务类型已经被使用，不能删除！";
                     model.ServerType = servicetype;
                 }
                 return View(model); 
            }
            repository.DeleteServerType(servicetype);
            return RedirectToAction("STIndex");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                repository.Dispose();
            }
            base.Dispose(disposing);
        }

        // GET: Orders/Details/5
        public ActionResult STDetails(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ServiceType servicetype = repository.ServiceTypeOperator.Query(id);
            if (servicetype == null)
            {
                return HttpNotFound();
            }
            ServiceTypeViewModel model = new ServiceTypeViewModel();
            {
                model.ServerType = servicetype;
                model.ReturnUrl = HttpContext.Request.Url.PathAndQuery;
            }
            return View(model);
        }
    }
}