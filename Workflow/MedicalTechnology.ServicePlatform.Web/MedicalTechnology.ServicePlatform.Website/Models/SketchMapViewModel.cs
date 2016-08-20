using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class SketchMapViewModel
    {
        public SketchMapViewModel()
        {
            Image = new SketchMapImage();
            IsEdit = 1;
        }
        public SketchMapImage Image { get; set; }
        public IEnumerable<SketchMapImage> Images { get; set; }
        public int IsEdit { get; set; }
        public string FileWebServiceUrl { get; set; }
    }
}