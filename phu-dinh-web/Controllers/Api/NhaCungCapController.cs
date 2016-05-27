using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using phu_dinh_web.Models;

namespace phu_dinh_web.Controllers
{
    public class NhaCungCapController : BaseApiController
    {
        public IEnumerable<rNhaCungCapDto> Get()
        {
            return _context.rNhaCungCaps.OrderBy(p => p.TenNhaCungCap)
                .AsEnumerable().Select(p => new rNhaCungCapDto(p));
        }
    }
}