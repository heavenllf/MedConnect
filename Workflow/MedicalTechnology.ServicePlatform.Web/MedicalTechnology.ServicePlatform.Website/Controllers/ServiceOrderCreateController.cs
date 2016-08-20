using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Domain.Implement;
using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Website.Models;
using MedicalTechnology.ServicePlatform.Domain.Helper;
using MedicalTechnology.ServicePlatform.Website.Attributes;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class ServiceOrderCreateController : Controller
    {
        private IOrdersService orderService;
        public ServiceOrderCreateController(IOrdersService repo)
        {
            orderService = repo;
        }
        // GET: ServiceOrderCreate
        public ActionResult OrderCreate(int? ServiceTypeID)
        {
            OrderViewModel model = new OrderViewModel();
            model.IsEdit = true;
            model.Order.OrderNO = OrderHelper.Instance.OrderNoGenerate();
            model.Order.FinishTimeRequired = DefaultOrderTime.RequiredFinishTime;
            if (ServiceTypeID.HasValue)
                model.Order.PrintType = orderService.QueryServiceType(ServiceTypeID.Value.ToString());
            orderService.Init();
            return View(model);
        }
        public ActionResult _BaseOrderUpdatePartial()
        {
            return PartialView();
        }
        // POST: Orders/Create
        // 为了防止“过多发布”攻击，请启用要绑定到的特定属性，有关 
        // 详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult OrderCreate(OrderViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.Order.UploadFiles = model.UploadFiles.ToList();
                model.Order.NotifyConfigs = model.Configs.ToList();
                if (orderService.SaveCreateOrder(model.Order))
                {
                    TempData["message"] = "保存成功";
                    TempData["messagetype"] = "1";
                    TempData["NewServiceInfo"] = model.Order;
                    return RedirectToAction("ServiceOrderSucceed");
                }
            }
            model.IsEdit = true;
            TempData["message"] = "保存失败，请重试";
            return View(model);
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                orderService.Dispose();
            }
            base.Dispose(disposing);
        }
        [AllowAnonymous]
        //[OutputCache(NoStore=true,Duration=0)]
        public ActionResult ServiceOrderCreate1Step()
        {
            OrderCreateFirstStepViewModel model = new OrderCreateFirstStepViewModel();
            model.ServiceTypes = orderService.LoadSeviceTypeList();
            return View(model);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult OrderCreateFirstStep(OrderCreateFirstStepViewModel model)
        {
            if (ModelState.IsValid)
            { 
                if(model.SelectedType > 0)
                {
                    TempData["OrderServiceType_ID"] = model.SelectedType;
                    return RedirectToAction("OrderCreate", new { ServiceTypeID= Convert.ToInt32(model.SelectedType) });
                }
            }
            return View(model);
        }
        public JsonResult GetServiceTypeDesc(string ServiceTypeID)
        {
            ServiceType type = orderService.QueryServiceType(ServiceTypeID);
            return Json(type.Desc, JsonRequestBehavior.AllowGet);
        }
        public ActionResult ServiceOrderSucceed()
        {
            ServiceOrderSucceedViewModel model = new ServiceOrderSucceedViewModel();
            Order orderinfo=TempData["NewServiceInfo"] as Order;
            if(orderinfo == null)
                return RedirectToAction("OrderCreate");
            model.OrderID = orderinfo.ID;
            model.ServiceName = orderinfo.Name;
            model.ServiceNo = orderinfo.OrderNO;
            model.ServiceTypeDesc = orderinfo.PrintType.Desc;
            model.ServiceTypeName = orderinfo.PrintType.Name;
            TempData["message"] = "服务:"+model.ServiceName+"提交成功!";
            return View(model);
        }
    }
}