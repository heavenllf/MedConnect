using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class AssignOrderViewModel : BaseOrderOperationViewModel
    {
        public AssignOrderViewModel()
        {
            Transcation = (int)emWFTranscation.OnAssign;
        }
        public IEnumerable<User> UserLists { get; set; }
        public string SelUserID { get; set; }
    }
}