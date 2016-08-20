using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Domain.Implement;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Domain.PageCache;
using MedicalTechnology.ServicePlatform.Utilities.Log;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MedicalTechnology.ServicePlatform.Website.Attributes
{
    public class LoginAuthorizeAttribute : AuthorizeAttribute
    {
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            try
            {
                bool isAuthorized = HttpContext.Current.User.Identity.IsAuthenticated;
                if (isAuthorized)
                {
                    HttpContextBase context = filterContext.HttpContext;
                    if (CurrentUserHelper.Instance.CurrentUserID.Length == 0)
                        context.Response.Redirect("~/Account/LoginExpire");
                    else
                    {
                        IUsersRepository repository = new UsersRepository();
                        bool bfind=repository.UsersOperator.IsExistUID(CurrentUserHelper.Instance.CurrentUserID);
                        if (!bfind)
                        {
                            context.Response.Redirect("~/Account/LoginExpire?MsgType=" + ((int)emLoginError.UserDelete).ToString());
                        }

                    }
                }
                else
                {
                    HandleUnauthorizedRequest(filterContext);
                }
            }
            catch (Exception ex)
            {
                LoggerMgr.Instance.WriteErrorLog(ex.Message);
                filterContext.HttpContext.Response.Redirect("~/Account/LoginExpire");
            }
                
            //base.OnAuthorization(filterContext);
        }
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            if(filterContext.HttpContext.Request.IsAjaxRequest())
            {
                /* If request is from AJAX call then setting status code to return */
                filterContext.HttpContext.Response.StatusCode = 401;
                filterContext.HttpContext.Response.End();
            }
            else
            {
                filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary{
                                            { "controller", "Account" },
                                            { "action", "LoginExpire" }
                                     });
            }
            //base.HandleUnauthorizedRequest(filterContext);
        }
    }
}