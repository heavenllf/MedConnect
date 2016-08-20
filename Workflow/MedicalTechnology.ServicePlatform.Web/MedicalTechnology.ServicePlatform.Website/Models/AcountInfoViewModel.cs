using MedicalTechnology.ServicePlatform.Website.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Models
{
    public class AcountInfoViewModel
    {
        [Display(Name="账 号")]
        public string UserID { get; set; }
        [Required(ErrorMessage = "原密码不能为空")]
        [Display(Name = "原 密 码")]
        [DataType(DataType.Password)]
        [CheckOldPassword(ErrorMessage="密码不存在,请重新输入")]
        public string OldPassword { get; set; }
        [Required(ErrorMessage = "新密码不能为空")]
        [Display(Name = "新 密 码")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required(ErrorMessage = "密码确认不能为空")]
        [Display(Name = "密码确认")]
        [DataType(DataType.Password)]
        [ComparePasswordsInput("Password",ErrorMessage="新密码不一致，请重新输入")]
        public string PasswordConfirm { get; set; }
    }
}