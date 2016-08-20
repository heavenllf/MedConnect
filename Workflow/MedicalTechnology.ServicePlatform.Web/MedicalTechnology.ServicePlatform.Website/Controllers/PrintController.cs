using MedicalTechnology.ServicePlatform.Domain.Interface;
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
    public class PrintController : Controller
    {
        // GET: Print
        private IOrdersService orderService;
        public PrintController(IOrdersService repo)
        {
            orderService = repo;
        }
        public ActionResult Print(string OrderNo)
        {
            PrintViewModel model = new PrintViewModel();
            model.Order = orderService.LoadOrder(OrderNo);
            return View(model);
        }
        public ActionResult _PrintPartial(string OrderNO)
        {
            PrintOperationViewModel model = new PrintOperationViewModel();
            model.OrderNo = OrderNO;
            return PartialView(model);
        }
        public ActionResult _ServiceTypePartial()
        {
            ServiceTypeOperationViewModel model = new ServiceTypeOperationViewModel();
            if (TempData["OrderServiceType_ID"] != null)
            {
                model.SelectedTypeID = TempData["OrderServiceType_ID"].ToString();
                model.ServiceTypeModel.ServerType = orderService.QueryServiceType(model.SelectedTypeID);
            }

            return PartialView(model);
        }
        public ActionResult _ServiceTypeByIDPartial(int TypeID)
        {
            ServiceTypeOperationViewModel model = new ServiceTypeOperationViewModel();
            if (TypeID > 0)
            {
                model.SelectedTypeID = TypeID.ToString();
                model.ServiceTypeModel.ServerType = orderService.QueryServiceType(model.SelectedTypeID);
            }

            return PartialView("_ServiceTypePartial",model);
        }
    }
}