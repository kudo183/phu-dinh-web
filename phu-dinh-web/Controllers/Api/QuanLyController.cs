using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace phu_dinh_web.Controllers
{
    public class QuanLyController : Controller
    {
        public ActionResult Index(string returnUrl)
        {
            ViewBag.SelectedView = Request.QueryString["v"];
            
            return View();
        }
    }
}