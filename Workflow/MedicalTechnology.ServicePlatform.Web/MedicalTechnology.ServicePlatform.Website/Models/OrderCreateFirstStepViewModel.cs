using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class OrderCreateFirstStepViewModel
    {
        public OrderCreateFirstStepViewModel()
        {
            ServerType = new ServiceType();
        }
        public IEnumerable<ServiceType> ServiceTypes { get; set; }
        public int SelectedType { get; set; }
        public ServiceType ServerType { get; set; }
    }
}