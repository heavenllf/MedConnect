using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Domain.Implement;
using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Website.Models;
using MedicalTechnology.ServicePlatform.Website.Attributes;
using MedicalTechnology.ServicePlatform.Data.Operator.Interface;
using MedicalTechnology.ServicePlatform.Data.Operator.Implement;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class ServiceOrderUpdateController : Controller
    {
        private IOrdersService orderService;
        public ServiceOrderUpdateController(IOrdersService repo)
        {
            orderService = repo;
        }
        private void BuildWorkFlowStates(OrderViewModel model)
        {
            IList<WorkflowState> states=orderService.LoadAllWFState(model.Order.PrintType.Group.ID);
            List<SelectListItem> listitems=new List<SelectListItem>();
            foreach(WorkflowState state in states)
            {
                if ((emWFStatue)state.StateID <= emWFStatue.Begin) continue;
                SelectListItem item = new SelectListItem();
                item.Value = state.StateID.ToString();
                item.Text = state.StateDesc;
                listitems.Add(item);
            }
            SelectList list = new SelectList(listitems, "Value", "Text", model.SelectedStateID);
            model.WorkFlowStates = list;
        }
        // GET: ServiceOrderEdit
        public ActionResult OrderUpdate(int ID,string returnUrl)
        {
            OrderViewModel model = new OrderViewModel();
            model.IsEdit = true;
            orderService.Init();
            model.Order=orderService.LoadOrder(ID);
            BuildWorkFlowStates(model);
            model.SelectedStateID = model.Order.state.StateID;
            model.returnUrl = returnUrl;
            model.IsCanEditState = orderService.GetCurrentUserCanChangeOrderStatus();
            return View(model);
        }
        // POST: Orders/OrderUpdate
        // 为了防止“过多发布”攻击，请启用要绑定到的特定属性，有关 
        // 详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult OrderUpdate(OrderViewModel model)
        {
            model.IsEdit = true;
            BuildWorkFlowStates(model);
            model.IsCanEditState = orderService.GetCurrentUserCanChangeOrderStatus();
            if (ModelState.IsValid)
            {
                model.Order.UploadFiles = model.UploadFiles.ToList();
                model.Order.NotifyConfigs = model.Configs.ToList();
                model.Order.state = new WorkflowState();
                model.Order.state.StateID = model.SelectedStateID;
                if (orderService.SaveUpdateOrder(model.Order))
                {
                    TempData["messagetype"] = "1";
                    TempData["message"]="修改成功";
                    return View(model);
                }
            }
            TempData["message"] = "修改失败，请重试";
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
    }
}