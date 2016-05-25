using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using phu_dinh_web.Models;

namespace phu_dinh_web.Controllers
{
    public class LoaiHangController : BaseApiController
    {
        public IEnumerable<rLoaiHangDto> Get()
        {
            return _context.rLoaiHangs.OrderBy(p => p.TenLoai)
                .AsEnumerable().Select(p => new rLoaiHangDto(p));
        }
    }
}