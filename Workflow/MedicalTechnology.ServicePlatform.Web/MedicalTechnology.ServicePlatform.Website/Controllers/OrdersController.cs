using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Domain.Implement;
using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Website.Models;
using MedicalTechnology.ServicePlatform.Data.Operator.Implement;
using MedicalTechnology.ServicePlatform.Data.Operator.Interface;
using MedicalTechnology.ServicePlatform.Data.Operator.Arguments;
using MedicalTechnology.ServicePlatform.Website.Attributes;
using MedicalTechnology.ServicePlatform.Utilities.Log;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    public class OrderViewInfo
    {
        public int OrderID { get; set; }
        public int CurrentState { get; set; }
        public int GroupID { get; set; }
    }
    public class Express
    {
        public string Note{ get; set; }
        public string Info{get;set;}
    }
    [LoginAuthorize]
    public class OrdersController : Controller
    {
        private IOrdersService orderService;
        public OrdersController(IOrdersService repo)
        {
            orderService = repo;
        }

        // GET: Orders/Details/5
        public ActionResult OrderDetails(string returnUrl,int id)
        {
            Order order = orderService.LoadOrder(id);
            
            if (order == null)
            {
                LoggerMgr.Instance.WriteErrorLog("OrderDetails 'order is null");
                return HttpNotFound();
            }
            OrderViewModel model = new OrderViewModel();
            {
                model.Order = order;
            }
            model.IsEdit = orderService.GetCurrentUserEditOrderStatus(order);
            model.returnUrl = returnUrl;
            return PartialView("_OrderDetailPartial", model);
        }
        public ActionResult ClearOrderDetails()
        {
            OrderViewModel model = new OrderViewModel();
            return PartialView("_OrderDetailPartial", model);
        }
        // GET: Orders/Delete/5
        public ActionResult Delete(int id)
        {
            Order order = orderService.LoadOrder(id);
            if (order == null)
            {
                return HttpNotFound();
            }
            OrderViewModel model = new OrderViewModel();
            {
                model.Order = order;
            }
            return View(model);
        }
        public ActionResult AssignOrder(List<OrderViewInfo> assignInfos, string assignUser)
        {
            if (assignInfos == null) return Json(new { IsSucceed = false });
            OrderAssignArg arg = new OrderAssignArg();
            arg.UserID = assignUser;
            foreach (var info in assignInfos)
            {
                OrderInfoArg orderarg = new OrderInfoArg();
                orderarg.OrderID = info.OrderID;
                orderarg.currentState = (emWFStatue)info.CurrentState;
                orderarg.GroupID = info.GroupID;
                arg.OrderInfos.Add(orderarg);
            }
            bool bsucceed = orderService.AssignOrder(arg);
            return Json(new { IsSucceed = bsucceed });
        }
        private void PrehandleUploadFiles(IEnumerable<UploadFile> UploadFiles,emUploadFileType filetype)
        {
            if (UploadFiles != null)
                UploadFiles.ToList().ForEach(x => x.FileType = filetype);
        }
        public ActionResult DesignOrder(List<OrderViewInfo> Infos, List<UploadFile> UploadFiles)
        {
            OrderDesignArg arg = new OrderDesignArg();
            PrehandleUploadFiles(UploadFiles,emUploadFileType.OrderDesignAttachedFile);
            arg.Files = UploadFiles;
            foreach (var info in Infos)
            {
                OrderInfoArg orderarg = new OrderInfoArg();
                orderarg.OrderID = info.OrderID;
                orderarg.currentState = (emWFStatue)info.CurrentState;
                orderarg.GroupID = info.GroupID;
                arg.OrderInfos.Add(orderarg);
            }
            bool bsucceed = orderService.DesignOrder(arg);
            return Json(new { IsSucceed = bsucceed });
        }
        public ActionResult ReDesignConfirmOrder(List<OrderViewInfo> Infos, List<UploadFile> UploadFiles, string Comment)
        {
            OrderDesignArg arg = new OrderDesignArg();
            PrehandleUploadFiles(UploadFiles, emUploadFileType.OrderDesignAttachedFile);
            arg.Files = UploadFiles;
            arg.Comment = Comment;
            foreach (var info in Infos)
            {
                OrderInfoArg orderarg = new OrderInfoArg();
                orderarg.OrderID = info.OrderID;
                orderarg.currentState = (emWFStatue)info.CurrentState;
                orderarg.GroupID = info.GroupID;
                arg.OrderInfos.Add(orderarg);
            }
            bool bsucceed = orderService.ReDesignOrder(arg);
            return Json(new { IsSucceed = bsucceed });
        }
        public ActionResult PreprocessOrder(List<OrderViewInfo> Infos)
        {
            if (Infos == null) return Json(new { IsSucceed = false });
            OrderPreprocessArg arg = new OrderPreprocessArg();
            foreach (var info in Infos)
            {
                OrderInfoArg orderarg = new OrderInfoArg();
                orderarg.OrderID = info.OrderID;
                orderarg.currentState = (emWFStatue)info.CurrentState;
                orderarg.GroupID = info.GroupID;
                arg.OrderInfos.Add(orderarg);
            }
            bool bsucceed = orderService.PreprocessOrder(arg);
            return Json(new { IsSucceed = bsucceed });
        }
        public ActionResult DesignConfirmOrder(List<OrderViewInfo> Infos, string Comment)
        {
            ConfirmDesignOrderArg arg = new ConfirmDesignOrderArg();
            arg.Comment = Comment;
            foreach (var info in Infos)
            {
                OrderInfoArg orderarg = new OrderInfoArg();
                orderarg.OrderID = info.OrderID;
                orderarg.currentState = (emWFStatue)info.CurrentState;
                orderarg.GroupID = info.GroupID;
                arg.OrderInfos.Add(orderarg);
            }
            bool bsucceed = orderService.ConfirmDesign(arg);
            return Json(new { IsSucceed = bsucceed });
        }
        public ActionResult Print3DOrder(List<OrderViewInfo> Infos, Express express)
        {
            if (Infos == null) return Json(new { IsSucceed = false });
            Print3DOrderArg arg = new Print3DOrderArg();
            foreach (var info in Infos)
            {
                OrderInfoArg orderarg = new OrderInfoArg();
                orderarg.OrderID = info.OrderID;
                orderarg.currentState = (emWFStatue)info.CurrentState;
                orderarg.GroupID = info.GroupID;
                arg.OrderInfos.Add(orderarg);
            }
            arg.ExpressNote = express.Note;
            arg.ExpressInfo = express.Info;
            bool bsucceed = orderService.Print3D(arg);
            return Json(new { IsSucceed = bsucceed });
        }
        public ActionResult CompleteOrder(List<OrderViewInfo> Infos)
        {
            if (Infos == null) return Json(new { IsSucceed = false });
            CompleteOrderArg arg = new CompleteOrderArg();
            foreach (var info in Infos)
            {
                OrderInfoArg orderarg = new OrderInfoArg();
                orderarg.OrderID = info.OrderID;
                orderarg.currentState = (emWFStatue)info.CurrentState;
                orderarg.GroupID = info.GroupID;
                arg.OrderInfos.Add(orderarg);
            }
            bool bsucceed = orderService.Complete(arg);
            return Json(new { IsSucceed = bsucceed });
        }
        public ActionResult CancelOrder(List<OrderViewInfo> Infos)
        {
            if (Infos == null) return Json(new { IsSucceed = false });
            CancelOrderArg arg = new CancelOrderArg();
            foreach (var info in Infos)
            {
                OrderInfoArg orderarg = new OrderInfoArg();
                orderarg.OrderID = info.OrderID;
                orderarg.currentState = (emWFStatue)info.CurrentState;
                orderarg.GroupID = info.GroupID;
                arg.OrderInfos.Add(orderarg);
            }
            bool bsucceed = orderService.Cancel(arg);
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
