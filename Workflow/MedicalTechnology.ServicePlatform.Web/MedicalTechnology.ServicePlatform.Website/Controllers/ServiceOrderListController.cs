using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Domain.Implement;
using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Website.Models;
using MedicalTechnology.ServicePlatform.Data.Operator.Interface;
using MedicalTechnology.ServicePlatform.Data.Operator.Implement;
using MedicalTechnology.ServicePlatform.Data.Operator.Arguments;
using MedicalTechnology.ServicePlatform.Website.WebHtmlHelpers;
using MedicalTechnology.ServicePlatform.Domain.PageCache;
using MedicalTechnology.ServicePlatform.Website.Attributes;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class ServiceOrderListController : Controller
    {
        // GET: ServiceOrderList
        private IOrdersService orderService;
        public ServiceOrderListController(IOrdersService repo)
        {
            orderService = repo;
        }
        
        // GET: Orders
        public ActionResult ServiceOrderList(OrderQueryViewModel Conditionmodel,int page=1)
        {
            Conditionmodel.LinkActionName = "ServiceOrderList";
            Conditionmodel.QueryActionName = "_OrderListPartial";
            Conditionmodel.States = orderService.AllTaskState;
            Conditionmodel.ReturnUrl = PageOperationFunctionHelper.Instance.UrlTable[emOperationNo.DoService];
            return View(BuildListViewModel(Conditionmodel, page));
        }
        public ActionResult _OrderListPartial(OrderQueryViewModel Conditionmodel, int page = 1)
        {
            Conditionmodel.States = orderService.AllTaskState;
            Conditionmodel.ReturnUrl = PageOperationFunctionHelper.Instance.UrlTable[emOperationNo.DoService];
            return PartialView(BuildListViewModel(Conditionmodel,page));
        }
        public ActionResult _UnsignedOrderListPartial(OrderQueryViewModel Conditionmodel, int page = 1)
        {
            Conditionmodel.States = orderService.UnasignedOrderState;
            Conditionmodel.WorkfowEvents = orderService.UnasignedOrderTranscation;
            Conditionmodel.ReturnUrl = PageOperationFunctionHelper.Instance.UrlTable[emOperationNo.UnsignedService];
            return PartialView("_OrderListPartial", BuildListViewModel(Conditionmodel, page));
        }
        public ActionResult _AsignedOrderListPartial(OrderQueryViewModel Conditionmodel, int page = 1)
        {
            Conditionmodel.States = orderService.AsignedOrderState;
            Conditionmodel.ReturnUrl = PageOperationFunctionHelper.Instance.UrlTable[emOperationNo.SignedService];
            return PartialView("_OrderListPartial", BuildListViewModel(Conditionmodel, page));
        }
        public ActionResult _HistoryOrderListPartial(OrderQueryViewModel Conditionmodel, int page = 1)
        {
            Conditionmodel.States = orderService.AllOrderState;
            Conditionmodel.ReturnUrl = PageOperationFunctionHelper.Instance.UrlTable[emOperationNo.QueryService];
            return PartialView("_OrderListPartial", BuildListViewModel(Conditionmodel, page,false));
        }
        public ActionResult _ExceptionOrderListPartial(OrderQueryViewModel Conditionmodel, int page = 1)
        {
            Conditionmodel.States = orderService.ExceptionOrderState;
            Conditionmodel.ReturnUrl = PageOperationFunctionHelper.Instance.UrlTable[emOperationNo.ExceptionService];
            return PartialView("_OrderListPartial", BuildListViewModel(Conditionmodel, page));
        }
        public ActionResult _OrderOperationPartial(int groupID)
        {
            OrderOperationViewModel model = new OrderOperationViewModel();
            model.groupID = groupID;
            if(groupID > 0)
            {
                foreach (var item in orderService.LoadSequenceTransList(groupID))
                {
                    OrderWorkflowViewModel wfmodel=new OrderWorkflowViewModel();
                    wfmodel.IsAvailible = orderService.GetCurrentUserWFOperPermission().Contains((emWFTranscation)item.ID) ? true : false;
                    wfmodel.transcation = item;
                    wfmodel.WFstates = orderService.WorkflowTranscation2State(item, groupID);
                    model.Workflows.Add(wfmodel);
                }
                model.bCancleAvailiable = orderService.GetCurrentUserWFOperPermission().Contains(emWFTranscation.OnCancel) ? true : false;
                model.AssignOrder.WFtranscation = orderService.MapTranscation((emWFTranscation)model.AssignOrder.Transcation);
                model.DesignOrder.WFtranscation = orderService.MapTranscation((emWFTranscation)model.DesignOrder.Transcation);
                model.PreprocessOrder.WFtranscation = orderService.MapTranscation((emWFTranscation)model.PreprocessOrder.Transcation);
                model.DesignConfirmOrder.WFtranscation = orderService.MapTranscation((emWFTranscation)model.DesignConfirmOrder.Transcation);
                model.Print3DOrder.WFtranscation = orderService.MapTranscation((emWFTranscation)model.Print3DOrder.Transcation);
                model.CompeteOrder.WFtranscation = orderService.MapTranscation((emWFTranscation)model.CompeteOrder.Transcation);
                model.CancelOrder.WFtranscation = orderService.MapTranscation((emWFTranscation)model.CancelOrder.Transcation);
                model.AssignOrder.UserLists = orderService.LoadTechinicanUserList();
            }
            return PartialView(model);
        }
        public ActionResult ServiceUnsignedList(OrderQueryViewModel Conditionmodel, int page = 1)
        {
            Conditionmodel.LinkActionName = "ServiceUnsignedList";
            Conditionmodel.QueryActionName = "_UnsignedOrderListPartial";
            Conditionmodel.States = orderService.UnasignedOrderState;
            Conditionmodel.WorkfowEvents = orderService.UnasignedOrderTranscation;
            Conditionmodel.ReturnUrl = PageOperationFunctionHelper.Instance.UrlTable[emOperationNo.UnsignedService];
            return View(BuildListViewModel(Conditionmodel, page));
        }
        public ActionResult ServiceAsignedList(OrderQueryViewModel Conditionmodel, int page = 1)
        {
            Conditionmodel.LinkActionName = "ServiceAsignedList";
            Conditionmodel.QueryActionName = "_AsignedOrderListPartial";
            Conditionmodel.States = orderService.AsignedOrderState;
            Conditionmodel.ReturnUrl = PageOperationFunctionHelper.Instance.UrlTable[emOperationNo.SignedService];
            return View(BuildListViewModel(Conditionmodel, page));
        }
        public ActionResult ServiceExceptionList(OrderQueryViewModel Conditionmodel, int page = 1)
        {
            Conditionmodel.LinkActionName = "ServiceExceptionList";
            Conditionmodel.QueryActionName = "_ExceptionOrderListPartial";
            Conditionmodel.States = orderService.ExceptionOrderState;
            Conditionmodel.ReturnUrl = PageOperationFunctionHelper.Instance.UrlTable[emOperationNo.ExceptionService];
            return View(BuildListViewModel(Conditionmodel, page));
        }
        public ActionResult ServiceHistoryList(OrderQueryViewModel Conditionmodel, int page = 1)
        {
            Conditionmodel.LinkActionName = "ServiceHistoryList";
            Conditionmodel.QueryActionName = "_HistoryOrderListPartial";
            Conditionmodel.States = orderService.AllOrderState;
            Conditionmodel.ReturnUrl = PageOperationFunctionHelper.Instance.UrlTable[emOperationNo.QueryService];
            return View(BuildListViewModel(Conditionmodel, page,false));
        }
        private OrderListViewModel BuildListViewModel(OrderQueryViewModel Conditionmodel, int page,bool bspecialFilter=true)
        {
            OrderListViewModel model = new OrderListViewModel();
            {
                model.OrderQueryCondition = Conditionmodel;
                model.OrderModel = new OrderViewModel();
                model.OrderModel.returnUrl = Conditionmodel.ReturnUrl;//HttpContext.Request.Url.PathAndQuery;
                OrderConditionArgs arg=new OrderConditionArgs();
                arg.OrderName = Conditionmodel.OrderName;
                arg.OrderNo = Conditionmodel.OrderNo;
                arg.Department = Conditionmodel.Department;
                arg.FinishTimeBegin = Conditionmodel.FinishTimeBegin;
                arg.FinishTimeEnd = Conditionmodel.FinishTimeEnd;
                arg.Hospital = Conditionmodel.Hospital;
                arg.SubmitTimeBegin=Conditionmodel.SubmitTimeBegin;
                arg.SubmitTimeEnd = Conditionmodel.SubmitTimeEnd;
                arg.Techintion = Conditionmodel.Techintion;
                arg.User = Conditionmodel.User;
                arg.PatientName = Conditionmodel.PatientName;
                arg.ClinicNo = Conditionmodel.ClinicNo;
                arg.WorkflowEvents=Conditionmodel.WorkfowEvents;
                HandleSpecialFilterConditions(Conditionmodel, arg, bspecialFilter);
                arg.Page = page;
                arg.PageSize = PagingHelpers.PageSize;
                int TotalItems = 0;
                model.Orders = orderService.LoadOrders(arg, out TotalItems).ToList();
                int blanklist = PagingHelpers.PageSize - model.Orders.Count();
                for (int i = 0; i < blanklist; i++)
                {
                    Order order = new Order();
                    order.state = new WorkflowState();
                    model.Orders.Add(order);
                }
                model.PagingInfo = new PageInfo
                {
                    CurentPage = page,
                    ItemsPerPage = PagingHelpers.PageSize,
                    TotalItem = TotalItems
                };
            }
            return model;
        }
        private void HandleSpecialFilterConditions(OrderQueryViewModel Conditionmodel, OrderConditionArgs arg, bool bspecialFilter)
        {
            if(bspecialFilter)
               UserDataPermissionFilter(Conditionmodel, arg);
            bool bprivate=orderService.GetCurrentUserDataPermission().Contains(emOperationNo.PrivateQuery);
            arg.IsRequestPrivate = bprivate && (CurrentUserHelper.Instance.CurrentUser.UserRole.ID == (int)emRoleNumber.Doctor);
            arg.IsProcessPrivate = bprivate && (CurrentUserHelper.Instance.CurrentUser.UserRole.ID == (int)emRoleNumber.Techincan);
            arg.CurrentUserID = Convert.ToInt32(CurrentUserHelper.Instance.CurrentUser.ID);
        }
        private void UserDataPermissionFilter(OrderQueryViewModel Conditionmodel, OrderConditionArgs arg)
        {
            foreach (var state in Conditionmodel.States)
            {
                if ((state > 0) && (orderService.GetCurrentUserWFDataPermission().Contains((emWFStatue)state)))
                    arg.states.Add((emWFStatue)state);
            }
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