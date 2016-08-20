using MedicalTechnology.ServicePlatform.Utilities.Log;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MedicalTechnology.ServicePlatform.Website.Attributes
{
    public class ExceptionAttribute : HandleErrorAttribute
    {
        /// <summary>
        /// 触发异常时调用的方法
        /// </summary>
        /// <param name="filterContext"></param>
        public override void OnException(ExceptionContext filterContext)
        {

            string message = string.Format("消息类型：{0}\n消息内容：{1}\n引发异常的方法：{2}\n引发异常的对象：{3}\n异常Controller：{4}\n异常Action：{5}\n异常堆栈：{6}"
                , filterContext.Exception.GetType().Name
                , filterContext.Exception.Message
                , filterContext.Exception.TargetSite
                , filterContext.Exception.Source
                , filterContext.RouteData.GetRequiredString("controller")
                , filterContext.RouteData.GetRequiredString("action")
                , filterContext.Exception.StackTrace);
            LoggerMgr.Instance.WriteLog(message, System.Diagnostics.EventLogEntryType.Error);
            base.OnException(filterContext);
        }
    }
}