using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using MedicalTechnology.ServicePlatform.Domain.Entities;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class UserConditionViewModel
    {
        [Display(Name = "账户")]
        public string UserID { get; set; }
        [Display(Name = "姓名")]
        public string UserName { get; set; }
        [Display(Name = "电话")]
        public string Phone { get; set; }
        [Display(Name = "性别")]
        public int Sex { get; set; }
        public bool IsMale
        {
            get
            {
                bool ret = false;
                if (Sex == (int)emUsrSex.male)
                    ret = true;
                return ret;
            }
            set
            {
                if (value)
                    Sex = (int)emUsrSex.male;
                else
                    Sex = (int)emUsrSex.famale;
            }
        }

    }
}