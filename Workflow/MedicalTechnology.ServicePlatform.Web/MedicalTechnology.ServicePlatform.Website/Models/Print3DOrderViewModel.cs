using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class Print3DOrderViewModel : BaseOrderOperationViewModel
    {
        public Print3DOrderViewModel()
        {
            Transcation = (int)emWFTranscation.On3DPrint;
        }
        [Display(Name = "快递备注")]
        public string ExpressNote { get; set; }
        [Display(Name = "快递信息")]
        public string ExpressInfo { get; set; }
     }
}