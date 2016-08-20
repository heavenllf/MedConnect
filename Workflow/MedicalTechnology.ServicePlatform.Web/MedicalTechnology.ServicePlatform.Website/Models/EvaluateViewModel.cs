using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class EvaluateViewModel
    {
        public EvaluateViewModel()
        {
            Evaluate = new EvaluateInfo();
            Evaluate.Level = 1;
        }
        public EvaluateInfo Evaluate { get; set; }
    }
}