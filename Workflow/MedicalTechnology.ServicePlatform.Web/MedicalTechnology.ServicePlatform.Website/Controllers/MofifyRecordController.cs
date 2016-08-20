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
    public class MofifyRecordController : Controller
    {
        private IOrdersService orderService;
        public MofifyRecordController(IOrdersService repo)
        {
            orderService = repo;
        }
        public ActionResult _OrderMotifyRecorderPartial()
        {
            OrderMotifyRecordViewModel model = new OrderMotifyRecordViewModel();
            return PartialView(model);
        }
        public ActionResult LoadRecordList(int OrderID)
        {
            OrderMotifyRecordViewModel model = new OrderMotifyRecordViewModel();
            model.Records=orderService.GetModifyRecord(OrderID);
            return PartialView("_OrderMotifyRecorderPartial", model);
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                orderService.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}