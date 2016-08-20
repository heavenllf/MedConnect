using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Domain.PageCache;
using MedicalTechnology.ServicePlatform.Utilities.Log;
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
    public class OrderNotifySettingController : Controller
    {
        private IOrdersService repository;
        public OrderNotifySettingController(IOrdersService repo)
        {
            repository = repo;
        }
        // GET: OrderNotifySetting
        public ActionResult _OrderNotifySettingPartial(bool IsEdit,int OrderID)
        {
            NotifySettingViewModel model = new NotifySettingViewModel();
            model.IsEdit = IsEdit;
            model.Configs=repository.LoadNotifyConfigs(OrderID);
            return PartialView("_OrderNotifySettingPartial", model);
        }
        public ActionResult CreateNotifySetting(bool IsEdit)
        {
            NotifySettingViewModel model = new NotifySettingViewModel();
            model.IsEdit = IsEdit;
            model.config = new OrderNotifyConfig();
            model.EventLists=repository.LoadTranscationList();
            model.UserLists =repository.LoadRelationUserList();
            return PartialView(model);
        }
        public ActionResult Add(int EventID, string[] Users, bool IsEmail, bool IsSMS)
        {
            //if ((Users == null) || Users.Length <= 0) return Content(bool.FalseString);
            //OrderNotifyConfig config = new OrderNotifyConfig();
            //config.ID = OrderCacheHelper.Instance.NotifyConfigCache.Count + 1;
            //config.EventID = EventID;
            //config.Users = string.Join(",",Users.ToArray());
            //config.IsEmail = IsEmail;
            //config.IsSMS = IsSMS;
            //config.EventName = repository.MapTranscation((emWFTranscation)EventID).Desc;
            //List<string> uNames=new List<string>();
            //repository.LoadRelationUserList(Users).ToList().ForEach(x=>uNames.Add(x.UserName));
            //config.UserNames = string.Join(",",uNames.ToArray());
            //OrderCacheHelper.Instance.NotifyConfigCache.Add(config);
            return Content(bool.TrueString);
        }
        public JsonResult getMultiUserList()
        {
            IEnumerable<Contacts> UserLists = repository.LoadRelationUserList();
            List<JsonUserItem> Users = new List<JsonUserItem>();
            foreach(var user in UserLists)
            {
                JsonUserItem item=new JsonUserItem();
                item.id=user.ID;
                item.text=user.UserName;
                Users.Add(item);
            }
            return Json(Users, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Delete(int ID)
        {
            //OrderNotifyConfig config = OrderCacheHelper.Instance.NotifyConfigCache.Find(delegate(OrderNotifyConfig nc) { return nc.ID == ID; });
            //OrderCacheHelper.Instance.NotifyConfigCache.Remove(config);
            return Content(bool.TrueString);
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                repository.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}