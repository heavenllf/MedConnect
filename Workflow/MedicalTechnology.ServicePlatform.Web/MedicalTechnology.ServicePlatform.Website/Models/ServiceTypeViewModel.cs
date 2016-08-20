using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class ServiceTypeViewModel
    {
        public ServiceTypeViewModel()
        {
            Images = new List<SketchMapImage>();
        }
        public ServiceType ServerType { get; set; }
        public IEnumerable<SketchMapImage> Images { get; set; }
        public string ReturnUrl { get; set; }
        [Display(Name="工作流")]
        public string WorkflowName { get; set; }
        public int SelectedWFID { get; set; }
        public SelectList WorkFlowGroups { get; set; }
    }
    public class ServiceTypeListViewModel
    {
        public ServiceType ServerType { get; set; }
        public IEnumerable<ServiceType> ServerTypes { get; set; }
        public PageInfo PagingInfo { get; set; }
        public string ReturnUrl { get; set; }
    }
    public class ServiceTypeOperationViewModel
    {
        public ServiceTypeOperationViewModel()
        {
            ServiceTypeModel = new ServiceTypeViewModel();
        }
        public ServiceTypeViewModel ServiceTypeModel { get; set; }
        public string SelectedTypeID { get; set; }
    }
}