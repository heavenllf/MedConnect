using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class JsonUserItem
    {
        public int id;
        public string text;
    }
    public class NotifySettingViewModel
    {
        public NotifySettingViewModel()
        {
            IsEdit = false;
        }
        public  OrderNotifyConfig config  { get; set; }
        public IEnumerable<WorkflowTranscation> EventLists { get; set; }
        public IEnumerable<Contacts> UserLists { get; set; }
        public IEnumerable<OrderNotifyConfig> Configs { get; set; }
        public bool IsEdit { get; set; }
    }
}