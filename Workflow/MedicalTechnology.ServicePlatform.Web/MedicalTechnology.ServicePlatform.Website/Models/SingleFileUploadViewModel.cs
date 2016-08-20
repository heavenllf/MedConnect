using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class SingleFileUploadViewModel
    {
        public int UploadFileType { get; set; }
        public string OrderNo { get; set; }
        public UploadFile UploadFileInfo { get; set; }
        public string FileName { get; set; }
    }
}