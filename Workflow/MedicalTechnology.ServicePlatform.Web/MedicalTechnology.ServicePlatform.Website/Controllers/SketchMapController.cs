using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Utilities.HtmlHelpers;
using MedicalTechnology.ServicePlatform.Utilities.UploadUtility;
using MedicalTechnology.ServicePlatform.Website.Attributes;
using MedicalTechnology.ServicePlatform.Website.Models;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class SketchMapController : Controller
    {
        private ISketchMapImageHandler handler;
        public SketchMapController(ISketchMapImageHandler repo)
        {
            handler = repo;
        }
        // GET: SketchMap
        public ActionResult SketchMapIndex(int ServiceTypeID,int? isEdit)
        {
            SketchMapViewModel model = new SketchMapViewModel();
            model.FileWebServiceUrl = UploadFileHelper.GetConfigFileWebUrl();
            model.Images=handler.LoadSketchMapByServiceType(ServiceTypeID);
            if (isEdit.HasValue && isEdit.Value == 0)
                model.IsEdit = 0;
            return PartialView(model);
        }
        // POST: Orders/Delete/5
        [HttpPost, ActionName("SketchMapDelete")]
        public ActionResult SketchMapDelete(string id)
        {
            //ServiceType servicetype = repository.ServiceTypeOperator.Query(id);
            //repository.ServiceTypeOperator.Delete(servicetype);
            return RedirectToAction("SketchMapIndex");
        }
        public ActionResult _SketchMapDisplayPartial(int ServiceTypeID)
        {
            SketchMapThumbnailViewModel model = new SketchMapThumbnailViewModel();
            model.ThumbnailImages = new List<ThumbnailImage>();
            model.FileWebServiceUrl = UploadFileHelper.GetConfigFileWebUrl();
            handler.LoadSketchMapByServiceType(ServiceTypeID).ToList().ForEach(
                x=> model.ThumbnailImages.Add(new ThumbnailImage{ FileName=UploadFileUtility.Base64ForUrlEncode(x.FileName), Desc=x.Name}));
            return PartialView(model);
        }
        public bool ThumbnailCallback()
        {
            return false;
        }
        public ActionResult GetThumbnailImage(string filename)
        {
            MemoryStream ms = new MemoryStream();
            try
            {
                Image.GetThumbnailImageAbort myCallback =
                   new Image.GetThumbnailImageAbort(ThumbnailCallback);
                Image image=Image.FromFile(Path.Combine(Server.MapPath(""),filename));
                Image thumbnailImage=image.GetThumbnailImage(100, 100, myCallback, IntPtr.Zero);
                thumbnailImage.Save(ms, System.Drawing.Imaging.ImageFormat.Jpeg);
            }
            catch (Exception)
            {
                Image image = Image.FromFile(Path.Combine(Server.MapPath(""), filename));
                image.Save(ms, System.Drawing.Imaging.ImageFormat.Jpeg);
            }
            return File(ms.ToArray(), "image/Jpeg");
        }
        public ActionResult GetImage(string filename)
        {
            Image image = Image.FromFile(Path.Combine(Server.MapPath(""), filename));
            MemoryStream ms = new MemoryStream();
            image.Save(ms, System.Drawing.Imaging.ImageFormat.Jpeg);
            return File(ms.ToArray(), "image/Jpeg");
        }
    }
}