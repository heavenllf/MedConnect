using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class ContactsListViewModel
    {
        public ContactsViewModel ContactsModel { get; set; }
        public IEnumerable<Contacts> ContactPersons { get; set; }
        public PageInfo PagingInfo { get; set; } 
    }
}