﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace phu_dinh_web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string returnUrl)
        {
            return View();
        }

        public ActionResult Test(string returnUrl)
        {
            return View();
        }
    }
}