using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class EvaluateListViewModel
    {
        public EvaluateListViewModel()
        {
            Messages = new List<EvaluateInfo>();
        }
        public IEnumerable<EvaluateInfo> Messages { get; set; }
    }
}