using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public enum emUserViewType
    {
        PersonView=1,
        DetailView,
        ListView,
        NoView
    }
    public class UserViewModel
    {
        public User User { get; set; }
        public int ViewType { get; set; }
        public IEnumerable<Orgazition> organizations { get; set; }
        public IEnumerable<Department> departments { get; set; }
        public int SelectedOrgID { get; set; }
        public int SelectedDepartmentID { get; set; }
        public IEnumerable<Role> Roles { get; set; }
        public int SelectedRoleID { get; set; }
    }
}