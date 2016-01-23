using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using phu_dinh_web.Filters;

namespace phu_dinh_web.Controllers
{
    [System.Web.Http.Authorize]
    [ValidateHttpAntiForgeryToken]
    public abstract class BaseApiController : ApiController
    {
        protected Data.PhuDinhEntities _context = new Data.PhuDinhEntities();
        
        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
            base.Dispose(disposing);
        }
    }
}