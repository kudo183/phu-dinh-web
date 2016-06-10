using System.Data.Entity;
using System.Net.Http;
using System.Web.Http;
using phu_dinh_web.Models;

namespace phu_dinh_web.Controllers.Api
{
    public class DonHangController : BaseApiController
    {
        public GetResult<DonHangDto> Get(string json)
        {
            var query = _context.tDonHangs
                .Include(p => p.rKhachHang)
                .Include(p => p.rKhoHang);
            return base.Get<DonHangDto, Data.tDonHang>(json, query);
        }

        [HttpPost]
        public HttpResponseMessage Save([FromBody]string json)
        {
            return base.Save<DonHangDto, Data.tDonHang>(json);
        }
    }
}