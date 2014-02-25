using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NPoco;
using AngularPagingSortingDemo.Models;

namespace AngularPagingSortingDemo.Controllers
{
    public class ContactController : ApiController
    {
        [Route("api/cc")]
        [HttpGet]
        public string Get()
        {
            return "Hello World";
        }

        [Route("api/contacts")]
        [HttpPost]
        public Page<Contact> GetContacts(FilterCriteria filterCriteria)
        {
            Page<Contact> contacts = new Page<Contact>();

            using (IDatabase db = new Database("DefaultConnection"))
            {
                contacts = db.Page<Contact>(filterCriteria.PageNumber, 10, "SELECT IndividualPlanContactId 'Id', Address1 'Name' FROM [IndividualPlanContact]");
            }
            
            return contacts;
        }
    }
}