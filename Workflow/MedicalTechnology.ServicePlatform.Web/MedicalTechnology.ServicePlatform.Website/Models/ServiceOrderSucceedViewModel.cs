using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class ServiceOrderSucceedViewModel
    {
        [Display(Name="服务名称")]
        public string ServiceName { get; set; }
        [Display(Name = "服务类型名称")]
        public string ServiceTypeName { get; set; }
        [Display(Name = "服务类型描述")]
        public string ServiceTypeDesc { get; set; }
        [Display(Name = "服务编号")]
        public string ServiceNo { get; set; }
        public int OrderID { get; set; }
    }
}