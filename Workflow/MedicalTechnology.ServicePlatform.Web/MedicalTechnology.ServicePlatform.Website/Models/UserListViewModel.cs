using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class UserListViewModel
    {
        public UserConditionViewModel UserConditionModel { get; set; }
        public UserViewModel Usermodel { get; set; }
        public IEnumerable<User> Users { get; set; }
        public PageInfo PagingInfo { get; set; } 
    }
}