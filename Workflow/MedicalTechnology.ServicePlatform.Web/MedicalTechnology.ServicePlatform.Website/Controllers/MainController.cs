using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Domain.PageCache;
using MedicalTechnology.ServicePlatform.Website.Attributes;
using MedicalTechnology.ServicePlatform.Website.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class MainController : Controller
    {
        private IPermissionService permissionService;
        public MainController(IPermissionService repo)
        {
            permissionService = repo;
        }
        // GET: Main
        public ActionResult Index()
        {
            MainViewModel model = new MainViewModel();
            try
            {
                model.HomeUrl = PageOperationFunctionHelper.Instance.RoleLoginPageTable[(emRoleNumber)permissionService.RoleInfo.ID];
                model.MenuTitle = PageOperationFunctionHelper.Instance.RoleLoginMenuTitleTable[(emRoleNumber)permissionService.RoleInfo.ID];
                model.SubMenuTitle = PageOperationFunctionHelper.Instance.RoleLoginSubMenuTitleTable[(emRoleNumber)permissionService.RoleInfo.ID];
                model.RoleName = permissionService.RoleInfo.Name;
                model.UserName = permissionService.UserName;
                IList<Permission> permissions = permissionService.LoadCurrentUserPermission(CurrentUserHelper.Instance.CurrentUserID);
                model.MenuInfos = new List<MenuInfo>();
                BuildMenu(permissions, model);
                BuildSubMenu(permissions, model);
                GetWorkflowPermission(permissions);
                GetOtherPageOperationPermission(permissions);
            }
            catch (Exception)
            {
                return RedirectToAction("Login", "Account");
            }
 
            return View(model);
        }
        private void BuildMenu(IList<Permission> permissions, MainViewModel model)
        {
            int appID = 0;
            foreach (var per in permissions)
            {
                MenuInfo menu;
                if (appID != per.App.ID)
                {
                    menu = new MenuInfo();
                    menu.DomID = per.App.ControlObject;
                    menu.Title = per.App.Title;
                    menu.ID = per.App.ID;
                    menu.DataOptions = permissionService.DataOptions((emApplicationNo)per.App.ID);
                    model.MenuInfos.Add(menu);
                }
                appID = per.App.ID;
            }
        }
        private void BuildSubMenu(IList<Permission> permissions, MainViewModel model)
        {
            foreach (var per in permissions)
            {
                if (per.Oper.ID < (int)emOperationNo.WorkflowPageOperationTag)
                {
                    SubMenuInfo submenu = new SubMenuInfo();
                    submenu.DomID = per.Oper.ControlObject;
                    submenu.Title = per.Oper.Title;
                    submenu.Url = permissionService.UrlLink((emOperationNo)per.Oper.ID);
                    MenuInfo menu = model.MenuInfos.Where(x => x.ID == per.App.ID).Single();
                    if (menu.SubMenus == null)
                        menu.SubMenus = new List<SubMenuInfo>();
                    menu.SubMenus.Add(submenu);
                }
            }
        }
        private void GetWorkflowPermission(IList<Permission> permissions)
        {
            foreach (var per in permissions)
            {
                if ((per.Oper.ID >= (int)emOperationNo.WorkflowPageOperationTag) && (per.Oper.ID < (int)emOperationNo.OtherPageOperTag))
                {
                    CurrentUserHelper.Instance.CurrentUserOrderWFPermissionNo.Add((emOperationNo)per.Oper.ID);//get current user order workflow permission to filter data;
                }
            }
        }
        private void GetOtherPageOperationPermission(IList<Permission> permissions)
        {
            foreach (var per in permissions)
            {
                if (per.Oper.ID > (int)emOperationNo.OtherPageOperTag)
                {
                    CurrentUserHelper.Instance.CurrentUserOrderPermissionNo.Add((emOperationNo)per.Oper.ID);//get current user other permission to filter data;
                }
            }
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                permissionService.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}