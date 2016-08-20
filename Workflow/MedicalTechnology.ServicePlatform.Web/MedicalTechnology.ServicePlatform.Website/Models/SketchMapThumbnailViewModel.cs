using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class ThumbnailImage
    {
        public string FileName{get;set;}
        public string Desc { get; set; }
    }
    public class SketchMapThumbnailViewModel
    {
        public IList<ThumbnailImage> ThumbnailImages { get; set; }
        public string FileWebServiceUrl { get; set; }
    }
}