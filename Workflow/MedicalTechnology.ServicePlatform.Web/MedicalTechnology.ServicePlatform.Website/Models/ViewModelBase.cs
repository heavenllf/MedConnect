using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class MenuInfo
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string DomID { get; set; }
        public string DataOptions { get; set; }
        public IList<SubMenuInfo> SubMenus { get; set; }
    }
    public class SubMenuInfo
    {
        public string Title { get; set; }
        public string DomID { get; set; }
        public string Url { get; set; }
    }
    public abstract class ViewModelBase
    {
        public IList<MenuInfo> MenuInfos { get; set; }
        public string RoleName { get; set;}
        public string UserName { get; set; }
        public string MenuTitle { get; set; }
        public string SubMenuTitle { get; set; }
    }
}