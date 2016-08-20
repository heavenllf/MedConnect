using MedicalTechnology.ServicePlatform.Website.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class HelpController : Controller
    {
        // GET: Help
        public ActionResult ServiceWorkflowHelp()
        {
            return View();
        }
    }
}