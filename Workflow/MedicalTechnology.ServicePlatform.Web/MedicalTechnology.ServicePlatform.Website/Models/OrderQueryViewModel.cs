using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class OrderQueryViewModel
    {
        public OrderQueryViewModel()
        {
            States = new List<int>();
            SubmitTimeBegin = DateTime.Now.Subtract(new TimeSpan(30, 0, 0, 0)).ToString("MM/dd/yyyy")+" 00:00:00";
            SubmitTimeEnd = DateTime.Now.ToString("MM/dd/yyyy") + " 23:59:59";
            FinishTimeEnd = DateTime.Now.ToString("MM/dd/yyyy") + " 23:59:59";
            FinishTimeBegin = DateTime.Now.Subtract(new TimeSpan(30, 0, 0, 0)).ToString("MM/dd/yyyy") + " 00:00:00";
        }
        [Display(Name="服务名称")]
        public string OrderName { get; set; }
         [Display(Name = "服务编号")]
        public string OrderNo { get; set; }
        [Display(Name = "设计工程师")]
        public string Techintion { get; set; }
        [Display(Name = "术者")]
        public string User { get; set; }
        [Display(Name = "医院")]
        public string Hospital { get; set; }
        [Display(Name = "科室")]
        public string Department { get; set; }
        [Display(Name = "患者姓名")]
        public string PatientName { get; set; }
        [Display(Name = "病例号")]
        public string ClinicNo { get; set; }
        [Display(Name = "提交时间：从")]
        public string SubmitTimeBegin { get; set; }
        [Display(Name = "到")]
        public string SubmitTimeEnd { get; set; }
        [Display(Name = "完成时间：从")]
        public string FinishTimeBegin { get; set; }
        [Display(Name = "到")]
        public string FinishTimeEnd { get; set; }
        public IList<int> States { get; set; }
        public string LinkActionName { get; set; }
        public string QueryActionName { get; set; }
        public string ReturnUrl { get; set; }
        public IList<int> WorkfowEvents { get; set; }
    }
}