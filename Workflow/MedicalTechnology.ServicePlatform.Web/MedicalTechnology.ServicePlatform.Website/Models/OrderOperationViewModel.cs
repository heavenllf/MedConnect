using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class OrderWorkflowViewModel
    {
        public bool IsAvailible;
        public WorkflowTranscation transcation { get; set; }
        public IList<int> WFstates { get; set; }

    }
    public class OrderOperationViewModel
    {
        public OrderOperationViewModel()
        {
            AssignOrder = new AssignOrderViewModel();
            PreprocessOrder = new PreprocessOrderViewModel();
            DesignOrder = new SchemeDesignOrderViewModel();
            DesignConfirmOrder = new DesignConfirmViewModel();
            Print3DOrder = new Print3DOrderViewModel();
            CompeteOrder = new CompeteOrderViewModel();
            CancelOrder = new CancelOrderViewModel();
            Workflows = new List<OrderWorkflowViewModel>();
        }
        public AssignOrderViewModel AssignOrder { get; set; }
        public PreprocessOrderViewModel PreprocessOrder { get; set; }
        public SchemeDesignOrderViewModel DesignOrder { get; set; }
        public DesignConfirmViewModel DesignConfirmOrder { get; set; }
        public Print3DOrderViewModel Print3DOrder { get; set; }
        public CompeteOrderViewModel CompeteOrder { get; set; }
        public CancelOrderViewModel CancelOrder { get; set; }
        public string OrderNo { get; set; }
        public IList<OrderWorkflowViewModel> Workflows { get; set; }
        public bool bCancleAvailiable { get; set; }
        public int groupID { get; set; }
    }
}