using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class SchemeDesignOrderViewModel : BaseOrderOperationViewModel
    {
        public SchemeDesignOrderViewModel()
        {
            Transcation = (int)emWFTranscation.OnSchemeDesign;
        }
    }
}