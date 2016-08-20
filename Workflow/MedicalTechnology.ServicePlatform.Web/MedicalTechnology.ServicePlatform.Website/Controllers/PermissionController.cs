using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Website.Attributes;
using MedicalTechnology.ServicePlatform.Website.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class PermissionController : Controller
    {
        private IOrdersService repository;
        public PermissionController(IOrdersService repo)
        {
            repository = repo;
        }
        // GET: Permission
        public ActionResult DetailList()
        {
            PermissionViewModel model = new PermissionViewModel();
            return View(model);
        }
    }
}