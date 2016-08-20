using MedicalTechnology.ServicePlatform.Domain.Entities;
using MedicalTechnology.ServicePlatform.Domain.Interface;
using MedicalTechnology.ServicePlatform.Website.Attributes;
using MedicalTechnology.ServicePlatform.Website.Models;
using MedicalTechnology.ServicePlatform.Website.WebHtmlHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace MedicalTechnology.ServicePlatform.Website.Controllers
{
    [LoginAuthorize]
    public class FrequentContactsController : Controller
    {
        private IUsersRepository repository;
        public FrequentContactsController(IUsersRepository repo)
        {
            repository = repo;
        }
        // GET: FrequentContacts
        public ActionResult ContactsList(int page = 1)
        {
            ContactsListViewModel model = new ContactsListViewModel();
            {
                model.ContactsModel = new ContactsViewModel();
                int TotalItems = 0;
                model.ContactPersons = repository.LoadCurrentUserContacts(page,PagingHelpers.PageSize, out TotalItems);
                model.PagingInfo = new PageInfo
                {
                    CurentPage = page,
                    ItemsPerPage = PagingHelpers.PageSize,
                    TotalItem = TotalItems
                };
            }
            return View(model);
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                repository.Dispose();
            }
            base.Dispose(disposing);
        }
        // GET: FrequentContacts/Create
        public ActionResult Create()
        {
            ContactsViewModel model = new ContactsViewModel();
            {
                model.departments = repository.LoadDepartments();
                model.organizations = repository.LoadOrgazations();
            }
            return View(model);
        }
        public ActionResult Details(int ID)
        {
            Contacts contact = repository.ContactsOp.Query(ID);
            ContactsViewModel model = new ContactsViewModel();
            {
                model.ContactPerson = contact;
            }
            return View(model);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(ContactsViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.ContactPerson.ContactOwner = repository.UsersOperator.Query(repository.CurrentUserID);
                model.ContactPerson.Department = repository.LoadDepartments().Where(x => x.ID == model.SelectedDepartmentID).Single();
                model.ContactPerson.Organization = repository.LoadOrgazations().Where(x => x.ID == model.SelectedOrgID).Single();
                repository.ContactsOp.Add(model.ContactPerson);
                return RedirectToAction("ContactsList");
            }

            return View(model);
        }
        public ActionResult Edit(int ID)
        {
            Contacts contact = repository.ContactsOp.Query(ID);
            if (contact == null)
            {
                return HttpNotFound();
            }
            ContactsViewModel model = new ContactsViewModel();
            {
                contact.ContactOwner = repository.UsersOperator.Query(repository.CurrentUserID);
                model.ContactPerson = contact;
                model.departments = repository.LoadDepartments();
                model.organizations = repository.LoadOrgazations();
                model.SelectedDepartmentID = contact.Department.ID;
                model.SelectedOrgID = contact.Organization.ID;
            }
            return View(model);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(ContactsViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.ContactPerson.ContactOwner = repository.UsersOperator.Query(repository.CurrentUserID);
                model.ContactPerson.Department = repository.LoadDepartments().Where(x => x.ID == model.SelectedDepartmentID).Single();
                model.ContactPerson.Organization = repository.LoadOrgazations().Where(x => x.ID == model.SelectedOrgID).Single();
                repository.ContactsOp.Edit(model.ContactPerson);
                return RedirectToAction("ContactsList");
            }
            return View(model);
        }
        public ActionResult Delete(int ID)
        {
            Contacts contact = repository.ContactsOp.Query(ID);
            if (contact == null)
            {
                return HttpNotFound();
            }
            ContactsViewModel model = new ContactsViewModel();
            {
                model.ContactPerson = contact;
            }
            return View(model);
        }
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int ID)
        {
            Contacts contact = repository.ContactsOp.Query(ID);
            repository.ContactsOp.Delete(contact);
            return RedirectToAction("ContactsList");
        }
    }
}