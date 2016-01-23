using System.Collections.Generic;
using System.Linq;
using phu_dinh_web.Models;

namespace phu_dinh_web.Controllers
{
    public class CanhBaoTonKhoController : BaseApiController
    {
        public IEnumerable<rCanhBaoTonKhoDto> GetrCanhBaoTonKhoes()
        {
            return _context.rCanhBaoTonKhoes
                .AsEnumerable().Select(p => new rCanhBaoTonKhoDto(p));
        }
    }
}