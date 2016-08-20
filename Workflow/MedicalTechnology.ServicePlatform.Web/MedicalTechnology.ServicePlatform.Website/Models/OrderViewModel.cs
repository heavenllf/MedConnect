using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class Marriage
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
    public static class MarriageInfo
    {
        private static IList<Marriage> marriages = new List<Marriage>();
        public static IList<Marriage> GetMarriages()
        {
            if(marriages.Count == 0)
            {
                marriages.Add(new Marriage { ID = 1, Name = "未婚" });
                marriages.Add(new Marriage { ID = 2, Name = "已婚" });
                marriages.Add(new Marriage { ID = 3, Name = "离婚" });
                marriages.Add(new Marriage { ID = 4, Name = "未知" });
            }
            return marriages;
        }
    }
    public class OrderViewModel
    {
        public OrderViewModel()
        {
            Order = new Order();
            EvaluateModel = new EvaluateViewModel();
            EvaluateModel.Evaluate.Level = 1;
            ConferenceModel = new ConferenceViewModel();
            UploadFiles = new List<UploadFile>();
            Configs = new List<OrderNotifyConfig>();
            IsEdit = false;
            IsCanEditState = false;
            Marriages = new SelectList(MarriageInfo.GetMarriages(),"ID","Name");
        }
        public bool IsEdit { get; set; }

        [Display(Name="申请医生")]
        public string RequestUserName { get; set; }
        [Display(Name = "处理技师")]
        public string ProcessUserName { get; set; }
        public Order Order { get; set; }
        public EvaluateViewModel EvaluateModel { get; set; }
        public ConferenceViewModel ConferenceModel { get; set; }
        public IEnumerable<UploadFile> UploadFiles { get; set; }
        public IEnumerable<OrderNotifyConfig> Configs { get; set; }
        public string returnUrl { get; set; }
        public int SelectedStateID { get; set; }
        public SelectList WorkFlowStates { get; set; }
        public bool IsCanEditState { get; set; }
        public SelectList Marriages { get; set; }
        public string MarriageDesc {
            get
            {
                string ret="";
                if(Order.Patient != null)
                {
                    ret=MarriageInfo.GetMarriages().Where(x => x.ID == Order.Patient.Marriage).SingleOrDefault().Name;
                }
                return ret;
            }
        }
    }
}