using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using phu_dinh_web.Models;

namespace phu_dinh_web.Controllers
{
    public class LoaiHangController : ApiController 
    {
        private Data.PhuDinhEntities _context = new Data.PhuDinhEntities();
        public IEnumerable<rLoaiHangDto> GetrLoaiHangs()
        {
            return _context.rLoaiHangs.AsEnumerable().Select(p => new rLoaiHangDto(p));
        }

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
            base.Dispose(disposing);
        }
    }
}