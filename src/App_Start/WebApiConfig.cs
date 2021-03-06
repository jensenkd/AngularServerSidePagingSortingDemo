﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Serialization;

namespace AngularPagingSortingDemo
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            
            // Use camel case for JSON data.
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.EnableSystemDiagnosticsTracing();

        }
    }
}
