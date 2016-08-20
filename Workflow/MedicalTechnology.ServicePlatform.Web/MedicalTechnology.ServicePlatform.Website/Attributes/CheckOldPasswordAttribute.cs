﻿using MedicalTechnology.ServicePlatform.Data.Operator.Implement;
using MedicalTechnology.ServicePlatform.Data.Operator.Interface;
using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Domain.PageCache;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Attributes
{
    public class CheckOldPasswordAttribute:RequiredAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            ValidationResult result = ValidationResult.Success;
            if(IsValid(value))
            {
                try
                {
                    IUsersOperator op = new UsersOperator();
                    User usr = op.Query(CurrentUserHelper.Instance.CurrentUserID);
                    if(usr.Password != (string)value)
                       result = new ValidationResult(ErrorMessage);
                }
                catch (Exception)
                {
                    result = new ValidationResult(ErrorMessage);
                }
            }
            return result;
        }
    }
}