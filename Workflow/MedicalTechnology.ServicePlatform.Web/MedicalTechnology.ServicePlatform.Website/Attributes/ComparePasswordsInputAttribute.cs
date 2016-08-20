using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MedicalTechnology.ServicePlatform.Website.Attributes
{
    public class ComparePasswordsInputAttribute : RequiredAttribute
    {
        private string _firstinput;
        public ComparePasswordsInputAttribute(string firstPassword)
        {
            _firstinput = firstPassword;
        }
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            ValidationResult result = ValidationResult.Success;
            var firstproperty = validationContext.ObjectType.GetProperty(_firstinput);
            if(firstproperty == null)
            {
                return new ValidationResult(string.Format("unknown property:{0}", _firstinput));
            }
            var firstvalue = firstproperty.GetValue(validationContext.ObjectInstance);
            if((string)firstvalue != (string)value)
            {
                return new ValidationResult(ErrorMessage);
            }
            return result;
        }
    }
}