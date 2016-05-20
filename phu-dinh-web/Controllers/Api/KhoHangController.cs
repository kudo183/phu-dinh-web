using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using phu_dinh_web.Models;

namespace phu_dinh_web.Controllers.Api
{
    public class KhoHangController : BaseApiController
    {
        public IEnumerable<KhoHangDto> Get()
        {
            return _context.rKhoHangs.OrderBy(p => p.TenKho)
                .AsEnumerable().Select(p => new KhoHangDto(p));
        }
    }
}