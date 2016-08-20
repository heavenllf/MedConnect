using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Website.Attributes;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class DownloadFileController : Controller
    {
       private IOrdersService orderService;
       public DownloadFileController(IOrdersService repo)
        {
            orderService = repo;
        }
        // GET: DownloadFile
        public ActionResult Index()
        {
            return View();
        }
        private UploadFile DownloadFileInfo
        {
            get
            {
                UploadFile retval=null;
                if (TempData["DownloadFileInfo"] != null)
                    retval = TempData["DownloadFileInfo"] as UploadFile;
                return retval;
            }
            set
            {
                TempData["DownloadFileInfo"] = value;
            }
        }
        private UploadFile DownloadOrderFileInfo
        {
            get
            {
                UploadFile retval = null;
                if (TempData["DownloadOrderFileInfo"] != null)
                    retval = TempData["DownloadOrderFileInfo"] as UploadFile;
                return retval;
            }
            set
            {
                TempData["DownloadOrderFileInfo"] = value;
            }
        }
        public JsonResult Download(int? OrderID)
        {
            bool ret = false;
            if (!OrderID.HasValue) return Json(ret);
            IEnumerable<UploadFile> files = orderService.QueryDesignFile(OrderID.Value);
            if ((files != null) && (files.Count() > 0))
            {
                //DownloadFileInfo = files[0];
                ret = true;
            }
            return Json(ret);
        }
        public FileResult DownloadFile()
        {
            UploadFile file = DownloadFileInfo;
            if (file == null) return null;
            byte[] fileBytes = System.IO.File.ReadAllBytes(file.Path);
            string fileName = file.FileName;
            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
        }
        public JsonResult CheckFileOrderAttahced(int orderID, int fileID,int fileType)
        {
            bool ret = false;
            UploadFile file = orderService.QueryOrderFile(orderID, fileID, (emUploadFileType)fileType);
            if ((file != null) && (file.ID > 0))
            {
                DownloadOrderFileInfo = file;
                ret = true;
            }
            return Json(ret);
        }
        public FileResult DownloadFileOrderAttahced()
        {
            UploadFile file = DownloadOrderFileInfo;
            if ((file == null) || (file.ID <= 0))
                return null;
            byte[] fileBytes = System.IO.File.ReadAllBytes(file.Path);
            string fileName = file.FileName;
            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                orderService.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}