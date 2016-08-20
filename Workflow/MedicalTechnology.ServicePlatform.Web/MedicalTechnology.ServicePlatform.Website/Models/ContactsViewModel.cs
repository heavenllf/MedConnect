using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class ContactsViewModel
    {
        public Contacts ContactPerson { get; set; }
        public IEnumerable<Orgazition> organizations { get; set; }
        public IEnumerable<Department> departments { get; set; }
        public int SelectedOrgID { get; set; }
        public int SelectedDepartmentID { get; set; }
    }
}