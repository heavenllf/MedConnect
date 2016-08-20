using MedicalTechnology.ServicePlatform.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class OrderListViewModel
    {
        public OrderQueryViewModel OrderQueryCondition { get; set; }
        public OrderViewModel OrderModel { get; set; }
        public List<Order> Orders { get; set; }
        public PageInfo PagingInfo { get; set; }
    }
}