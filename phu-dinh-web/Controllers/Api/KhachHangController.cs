using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using phu_dinh_web.Models;

namespace phu_dinh_web.Controllers
{
    public class KhachHangController : BaseApiController
    {
        public IEnumerable<rKhachHangDto> GetrKhachHangs()
        {
            return _context.rKhachHangs.OrderBy(p => p.TenKhachHang)
                .AsEnumerable().Select(p => new rKhachHangDto(p));
        }
    }
}