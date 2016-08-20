using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Domain.Interface;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class UploadFileListViewModel
    {
        public UploadFileListViewModel()
        {
            UploadFile = new UploadFile();
            UploadFiles = new List<UploadFile>();
            IsEdit = false;
            IsCanDownload = true;
        }
        public UploadFile UploadFile { get; set; }
        public IEnumerable<UploadFile> UploadFiles { get; set; }
        public bool IsEdit { get; set; }
        public bool IsCanDownload { get; set; }
        public string FileWebServiceUrl { get; set; }

    }
}