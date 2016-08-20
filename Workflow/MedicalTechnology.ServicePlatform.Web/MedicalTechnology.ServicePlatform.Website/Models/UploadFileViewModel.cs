using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Domain.PageCache;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class UploadFileViewModel
    {
        private bool _isEdit = false;
        public int OrderID { get; set; }
        public string orderNo { get; set; }
        public UploadFileViewModel()
        {
            UploadFileType = (int)emUploadFileType.OrderRequestAttachedFile;
            FileListModel = new UploadFileListViewModel();
            uploadBtn = "aupload";
            uploadDialog = "openUploadDiv";
            RefreshlistUrl = "hidUrl";
            UploadOrderIDName = "upload-OrderID";
            divIDName = "divUploadfilelist";
            uploadIframe = "commonframe";
            _isEdit = false;
        }
        public int UploadFileType { get; set; }
        public string UploadFileTypeName
        {
            get
            {
                return OrderCacheHelper.Instance.FileTypeToDesc((emUploadFileType)UploadFileType);
            }
        }
        public UploadFileListViewModel FileListModel { get; set; }
        public string uploadBtn { get; set; }
        public string uploadDialog { get; set; }
        public string RefreshlistUrl { get; set; }
        public string UploadOrderIDName { get; set; }
        public string divIDName { get; set; }
        public string uploadIframe { get; set; }
        public bool IsEdit
        {
            get { return _isEdit; }
            set
            {
                FileListModel.IsEdit = value;
                FileListModel.IsCanDownload = !value;
            }
        }
        public string FileStoreAbsoluteDir { get; set; }
    }
}