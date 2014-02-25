using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularPagingSortingDemo.Models
{
    public class FilterCriteria
    {
        public int PageNumber { get; set; }
        public int ItemsPerPage { get; set; }
        public string SortDir { get; set; }
        public string SortedBy { get; set; }
    }
}