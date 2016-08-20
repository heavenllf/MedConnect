using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class PageInfo
    {
        public PageInfo()
        {
            CurentPage = 1;
        }
        public int TotalItem { get; set; }
        public int ItemsPerPage { get; set; }
        public int CurentPage { get; set; }

        public int TotalPages
        {
            get { return (int)Math.Ceiling((decimal)TotalItem / ItemsPerPage); }
        }
    }
}