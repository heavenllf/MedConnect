using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class PrintOperationViewModel
    {
        public PrintOperationViewModel()
        {
            PrintViewModel = new PrintViewModel();
        }
        public PrintViewModel PrintViewModel { get; set; }
        public int OrderID { get; set; }
        public string OrderNo { get; set; }
    }
}