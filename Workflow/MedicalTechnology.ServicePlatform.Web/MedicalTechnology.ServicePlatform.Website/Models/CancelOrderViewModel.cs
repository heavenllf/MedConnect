﻿using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class CancelOrderViewModel : BaseOrderOperationViewModel
    {
        public CancelOrderViewModel()
        {
            Transcation = (int)emWFTranscation.OnCancel;
        }
    }
}