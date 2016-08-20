using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class RoleListViewModel
    {
        public Role Role { get; set; }
        public IEnumerable<Role> Roles { get; set; }
    }
}