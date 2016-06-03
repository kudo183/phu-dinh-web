using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using phu_dinh_web.Models;

namespace phu_dinh_web.Controllers.Api
{
    public class MatHangController : BaseApiController
    {
        public IEnumerable<tMatHangDto> Get()
        {
            return _context.tMatHangs.OrderBy(p => p.TenMatHang)
                .AsEnumerable().Select(p => new tMatHangDto(p));
        }
    }
}