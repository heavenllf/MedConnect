using MedicalTechnology.ServicePlatform.Domain.Entities;
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
    public class EvaluateController : Controller
    {
        private IOrdersService orderService;
        public EvaluateController(IOrdersService repo)
        {
            orderService = repo;
        }
        public ActionResult _EvaluatePartial()
        {
            EvaluateViewModel model = new EvaluateViewModel();
            return PartialView(model);
        }
        public ActionResult _EvaluateListPartail(int OrderID)
        {
            EvaluateListViewModel model = new EvaluateListViewModel();
            model.Messages = orderService.LoadEvaluateMessage(OrderID);
            return PartialView( model);
        }
        public ActionResult AddEvaluateMsg(EvaluateInfo MsgInfo,int OrderID)
        {
            bool bsucceed = orderService.AddEvaluateMessage(MsgInfo, OrderID);
            return Json(new { IsSucceed = bsucceed });
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