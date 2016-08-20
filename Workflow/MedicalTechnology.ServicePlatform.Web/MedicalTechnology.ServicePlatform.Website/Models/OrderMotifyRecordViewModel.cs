using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using MedicalTechnology.ServicePlatform.Domain.Entities;
namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class OrderMotifyRecordViewModel
    {
        public OrderMotifyRecordViewModel()
        {
            Recorder = new ModifyRecord();
            Records = new List<ModifyRecord>();
        }
        public ModifyRecord Recorder { get; set; }
        public IEnumerable<ModifyRecord> Records { get; set; }
    }
}