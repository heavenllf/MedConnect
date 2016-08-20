using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using MedicalTechnology.ServicePlatform.Website.Models;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Domain.Implement;
using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Domain.PageCache;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    public class AccountController : Controller
    {
        private IAuthentication repository;
        private IUsersRepository userRepository;
        public AccountController(IAuthentication repo)
        {
            repository = repo;
            userRepository = new UsersRepository();
        }
        /// <summary>
        /// 登陆操作
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        public ActionResult Login(LoginViewModel model, string returnUrl)
        {
            int val = Session.Timeout;
            if(ModelState.IsValid)
            {
                if(repository.Authenticate(model.UserID,model.Password))
                {
                    //FormsAuthentication.SetAuthCookie(model.UserID, false);
                    CurrentUserHelper.Instance.CurrentUserID = model.UserID;
                    SetAuthCookie(model);
                    return RedirectToAction("Index", "Main");
                }
                else
                {
                    ModelState.AddModelError("", "错误的用户名或密码");
                }
            }
            return View(model);
            
        }
        private void SetAuthCookie(LoginViewModel model)
        {
            FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(
                    1,
                    model.UserID,
                    DateTime.Now,
                    DateTime.Now.Add(FormsAuthentication.Timeout),
                    model.RememberMe,
                    model.UserID
                    );
            HttpCookie cookie = new HttpCookie(
                FormsAuthentication.FormsCookieName,
                FormsAuthentication.Encrypt(ticket));

            if (ticket.IsPersistent) 
                cookie.Expires = ticket.Expiration;

            Response.Cookies.Add(cookie);
        }
        [AllowAnonymous]
        public ActionResult Login()
        {
            LoginViewModel model = new LoginViewModel();
            return View(model);
        }
        [AllowAnonymous]
        public ActionResult LoginExpire(int? MsgType)
        {
            LoginViewModel model = new LoginViewModel();
            model.Message = "操作超时，请重新登录";
            model.MsgType = (int)emLoginError.Expire;
            if (MsgType.HasValue)
            {
                if (MsgType == (int)emLoginError.UserDelete)
                {
                    model.Message = "用户不存在或已经删除，请联系管理员";
                    model.MsgType = (int)emLoginError.UserDelete;
                }
            }
            return View("Login",model);
        }
        public ActionResult LogOut()
        {
            CurrentUserHelper.Instance.CurrentUserID = "";
            repository.Logout();
            FormsAuthentication.SignOut();
            Session.Clear();
            Session.Abandon();
            return RedirectToAction("Login", "Account");
        }
        public ActionResult Register()
        {
            RegisterViewModel model = new RegisterViewModel();
            model.departments = userRepository.LoadDepartments();
            model.organizations = userRepository.LoadOrgazations();
            model.roles = userRepository.LoadRoles();
            return View(model);
        }
        [HttpPost]
        public ActionResult Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    if (model.SelectedDepartmentID > 0)
                        model.rUser.Department = userRepository.LoadDepartments().Where(x => x.ID == model.SelectedDepartmentID).Single();
                    if (model.SelectedOrgID > 0)
                        model.rUser.Organization = userRepository.LoadOrgazations().Where(x => x.ID == model.SelectedOrgID).Single();
                    if (model.SelectedRoleID > 0)
                        model.rUser.UserRole = userRepository.LoadRoles().Where(x => x.ID == model.SelectedRoleID).Single();
                    if(userRepository.UsersOperator.Add(model.rUser) > 0)
                    {
                        TempData["messagetype"] = "1";
                        TempData["message"] = "用户添加成功";
                        model = new RegisterViewModel();
                    }

                }
                catch (Exception)
                {
                    TempData["messagetype"] = "0";
                    TempData["message"] = "用户添加失败，请重试";
                }
            }
            model.departments = userRepository.LoadDepartments();
            model.organizations = userRepository.LoadOrgazations();
            model.roles = userRepository.LoadRoles();
            return View(model);
        }
    }
}