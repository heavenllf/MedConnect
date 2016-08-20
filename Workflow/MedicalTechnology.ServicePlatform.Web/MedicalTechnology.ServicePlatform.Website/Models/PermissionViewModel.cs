using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class PermissionViewModel
    {
        public Role Role{get;set;}
        public IEnumerable<ApplicationModule> AppFunctions { get; set; }
    }
}