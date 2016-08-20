using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Domain.Implement;
using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Website.Models;
using MedicalTechnology.ServicePlatform.Website.Attributes;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class RolesController : Controller
    {
        private IRolesService repository;
        public RolesController(IRolesService repo)
        {
            repository = repo;
        }
        private IEnumerable<Role> Roles
        {
            get { return repository.Roles; }
        }

        // GET: Roles
        public ActionResult Index()
        {
            RoleListViewModel model = new RoleListViewModel();
            {
                model.Roles = Roles;
            }
            return View(model);
        }

        // GET: Roles/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Role role = repository.RolesOperator.Query(id);
            if (role == null)
            {
                return HttpNotFound();
            }
            RoleViewModel model = new RoleViewModel();
            {
                model.Role = role;
            }
            return View(model);
        }

        // GET: Roles/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Roles/Create
        // 为了防止“过多发布”攻击，请启用要绑定到的特定属性，有关 
        // 详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Name,Desc")] Role role)
        {
            if (ModelState.IsValid)
            {
                repository.RolesOperator.Add(role);
                return RedirectToAction("Index");
            }
            RoleViewModel model = new RoleViewModel();
            {
                model.Role = role;
            }
            return View(model);
        }

        // GET: Roles/Edit/5
        public ActionResult Edit(string id)
        {
            Role role = repository.RolesOperator.Query(id);
            if (role == null)
            {
                return HttpNotFound();
            }
            RoleViewModel model = new RoleViewModel();
            {
                model.Role = role;
            }
            return View(model);
        }

        // POST: Roles/Edit/5
        // 为了防止“过多发布”攻击，请启用要绑定到的特定属性，有关 
        // 详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Name,Desc")] Role role)
        {
            if (ModelState.IsValid)
            {
                repository.RolesOperator.Edit(role);
                return RedirectToAction("Index");
            }
            return View(role);
        }

        // GET: Roles/Delete/5
        public ActionResult Delete(string id)
        {
            Role role = repository.RolesOperator.Query(id);
            if (role == null)
            {
                return HttpNotFound();
            }
            RoleViewModel model = new RoleViewModel();
            {
                model.Role = role;
            }
            return View(model);
        }

        // POST: Roles/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            Role role = repository.RolesOperator.Query(id);
            repository.RolesOperator.Delete(role);
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                repository.RolesOperator.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
