using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MedicalTechnology.ServicePlatform.Utilities.UploadUtility;
using MedicalTechnology.ServicePlatform.Website.Models;
using MedicalTechnology.ServicePlatform.Domain.PageCache;
using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Utilities.Log;
using MedicalTechnology.ServicePlatform.Website.Attributes;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class UploadFileController : Controller
    {
        private IOrdersService orderService;
        public UploadFileController(IOrdersService repo)
        {
            orderService = repo;
        }
        public ActionResult _PartialUploadfileList(bool IsEdit,int OrderID,int UploadFileType)
        {
            UploadFileListViewModel model = new UploadFileListViewModel();
            model.IsEdit = IsEdit;
            model.IsCanDownload = !IsEdit;
            model.UploadFiles = orderService.LoadUploadFiles(OrderID,(emUploadFileType)UploadFileType);
            model.FileWebServiceUrl = UploadFileHelper.GetConfigFileWebUrl();
            return PartialView(model);
        }
        public ActionResult CreateReportUpload()
        {
            UploadFileViewModel model = new UploadFileViewModel();
            model.uploadBtn = "reportuploadBtn";
            model.uploadDialog = "reportuploadDialog";
            model.RefreshlistUrl = "RefreshReportUrl";
            model.UploadOrderIDName = "upload-ReportOrderID";
            model.divIDName = "divReportUploadList";
            model.uploadIframe = "ReportIframe";
            model.FileListModel.IsEdit = true;
            model.FileListModel.IsCanDownload = false;
            model.UploadFileType = (int)emUploadFileType.OrderDesignAttachedFile;
            model.orderNo = UploadOrderNo;
            model.FileStoreAbsoluteDir = orderService.GetCurrentFileStoreDirectory();
            return PartialView("_UploadFilePartial", model);
        }
        public ActionResult ConfirmReport()
        {
            UploadFileViewModel model = new UploadFileViewModel();
            try
            {
                model.uploadBtn = "confirmreportuploadBtn";
                model.uploadDialog = "confirmreportuploadDialog";
                model.RefreshlistUrl = "confirmconfirmRefreshReportUrl";
                model.UploadOrderIDName = "upload-confirmReportOrderID";
                model.divIDName = "confirmdivReportUploadList";
                model.uploadIframe = "ConfirmIframe";
                model.FileListModel.IsEdit = false;
                model.FileListModel.IsCanDownload = true;
                model.UploadFileType = (int)emUploadFileType.OrderDesignAttachedFile;
                model.FileStoreAbsoluteDir = orderService.GetCurrentFileStoreDirectory();
                model.orderNo = UploadOrderNo;
            }
            catch (Exception ex)
            {
                LoggerMgr.Instance.WriteLog(ex.Message, System.Diagnostics.EventLogEntryType.Error);
            }

            return PartialView("_UploadFilePartial", model);
        }
        public string UploadOrderNo
        {
            get
            {
                string val = "";
                if (TempData["UploadOrderNo"] != null)
                    val = TempData["UploadOrderNo"].ToString();
                return val;
            }
            set
            {
                TempData["UploadOrderNo"] = value;
            }
        }
        public string UploadOrderID
        {
            get
            {
                string val = "0";
                if (TempData["UploadOrderID"] != null)
                    val = TempData["UploadOrderID"].ToString();
                return val;
            }
            set
            {
                TempData["UploadOrderID"] = value;
            }
        }
        private string PreprocessParam(string strParm,out int fileType)
        {
            fileType=0;
            List<string> list = new List<string>();
            string[] array=strParm.Split(';');
            for (int i = 0; i < array.Length; i++)
            {
                string val = array[i];
                if((i == 0) && (val.Length == 0))
                {
                    val = UploadOrderNo;
                }
                else if(i == 1)
                {
                    fileType=Convert.ToInt16(val);
                    val=FileUploadTypeMap.Instance.TypeDesc((emUploadFileType)fileType);
                }
                list.Add(val);
            }

            return string.Join(";", list.ToArray());
        }
        public ActionResult GetOrderID(int OrderID)
        {
            try
            {
                UploadOrderNo = orderService.LoadOrder(OrderID).OrderNO;
                UploadOrderID = OrderID.ToString();
            }
            catch (Exception ex)
            {
                LoggerMgr.Instance.WriteLog(ex.Message, System.Diagnostics.EventLogEntryType.Error);
                return Content(false.ToString());
            }
            return Content(true.ToString());
        }
        public ActionResult LoadOrderUploadFiles(int OrderID)
        {
            try
            {
                UploadOrderNo = orderService.LoadOrder(OrderID).OrderNO;
                UploadOrderID = OrderID.ToString();
            }
            catch (Exception ex)
            {
                LoggerMgr.Instance.WriteLog(ex.Message, System.Diagnostics.EventLogEntryType.Error);
                return Json(new { IsSucceed = false });
            }
            return Json(new { IsSucceed = true });
        }
        [HttpPost]
        public virtual ActionResult ProcessFileUpload(string file, string param, bool last, bool first, long offset)
        {
            bool bret=true;
            try 
            {
                var fileLength = HttpContext.Request.InputStream.Length;
                if (!string.IsNullOrWhiteSpace(file) && fileLength > 0)
                {
                    UploadArg arg = new UploadArg();
                    arg.stream=HttpContext.Request.InputStream;
                    arg.fileName=file;
                    int filetype = 0;
                    arg.parameters = PreprocessParam(param, out filetype);
                    arg.firstChunk=first;
                    arg.lastChunk=last;
                    bret = UploadManager.Instance.SaveFile(arg);
                    if (bret)
                    {
                        UploadFile uploadfile = new UploadFile();
                        uploadfile.Date = UploadManager.Instance.FileInfos.CreationTime;
                        uploadfile.DirectoryName = UploadManager.Instance.FileInfos.Directory.FullName;
                        uploadfile.FileName = UploadManager.Instance.FileInfos.Name;
                        uploadfile.Desc = "其他附件";                   
                        uploadfile.FileType = emUploadFileType.Other;
                        if(filetype > 0)
                            uploadfile.FileType = (emUploadFileType)filetype;
                        uploadfile.Path = UploadManager.Instance.FileInfos.FullName;
                        OrderCacheHelper.Instance.AddUploadFileCache(uploadfile);
                    }

                }
            }
            catch(Exception)
            {
                bret=false;
            }
            return Content(bret.ToString());
        }
        public ActionResult Delete(int FileType,int Index = 0)
        {
            if (Index >= 0)
                OrderCacheHelper.Instance.DeleteUploadFileCache((emUploadFileType)FileType, Index);
            return Content(bool.TrueString);
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                orderService.Dispose();
            }
            base.Dispose(disposing);
        }
        public ActionResult UploadSketchMaps()
        {
            SketchMapUplaodViewModel model = new SketchMapUplaodViewModel();
            model.FileServiceUrl = UploadFileHelper.GetConfigFileWebUrl();
            return View(model);
        }
        public ActionResult UploadOrderOptionFile()
        {
            OrderOptionUploadFileViewModel model = new OrderOptionUploadFileViewModel();
            model.FileServiceUrl = UploadFileHelper.GetConfigFileWebUrl();
            return View(model);
        }
        public ActionResult _CreateUploadRequestFilePartial(string OrderNo)
        {
            UploadFileViewModel model = new UploadFileViewModel();
            model.orderNo = OrderNo;
            model.UploadFileType = (int)emUploadFileType.OrderRequestAttachedFile;
            model.IsEdit = true;
            model.FileStoreAbsoluteDir = orderService.GetCurrentFileStoreDirectory();
            return PartialView("_UploadFilePartial", model);
        }
        public ActionResult _QueryUploadRequestFilePartial(int OrderID, string OrderNo)
        {
            UploadFileViewModel model = new UploadFileViewModel();
            model.FileListModel.UploadFiles = orderService.LoadRequestedUploadFiles(OrderID);
            model.orderNo = OrderNo;
            model.UploadFileType = (int)emUploadFileType.OrderRequestAttachedFile;
            model.OrderID = OrderID;
            model.FileListModel.FileWebServiceUrl = UploadFileHelper.GetConfigFileWebUrl();
            model.FileStoreAbsoluteDir = orderService.GetCurrentFileStoreDirectory();
            return PartialView("_UploadFilePartial", model);
        }
        public ActionResult _UpdateUploadRequestFilePartial(int OrderID, string OrderNo)
        {
            UploadFileViewModel model = new UploadFileViewModel();
            model.FileListModel.UploadFiles = orderService.LoadUploadFiles(OrderID);
            model.orderNo = OrderNo;
            model.UploadFileType = (int)emUploadFileType.OrderRequestAttachedFile;
            model.OrderID = OrderID;
            model.IsEdit = true;
            model.FileStoreAbsoluteDir = orderService.GetCurrentFileStoreDirectory();
            return PartialView("_UploadFilePartial", model);
        }
        public ActionResult _QueryUploadAllFilePartial(int OrderID, string OrderNo)
        {
            UploadFileViewModel model = new UploadFileViewModel();
            model.FileListModel.UploadFiles = orderService.LoadUploadFiles(OrderID);
            model.orderNo = OrderNo;
            model.OrderID = OrderID;
            model.FileListModel.FileWebServiceUrl = UploadFileHelper.GetConfigFileWebUrl();
            model.FileStoreAbsoluteDir = orderService.GetCurrentFileStoreDirectory();
            return PartialView("_UploadFilePartial", model);
        }
        [OutputCache(Duration=0)]
        [HttpGet]
        public JsonResult KeepSessionAlive()
        {
            var ret = true;
            return Json(ret,JsonRequestBehavior.AllowGet);           
        }
    }
}