using System.Data.Entity;
using System.Net.Http;
using System.Web.Http;
using phu_dinh_web.Models;

namespace phu_dinh_web.Controllers.Api
{
    public class ChiTietDonHangController : BaseApiController
    {
        public GetResult<ChiTietDonHangDto> Get(string json)
        {
            var query = _context.tChiTietDonHangs
                .Include(p => p.tDonHang.rKhoHang)
                .Include(p => p.tDonHang.rKhachHang);
            return base.Get<ChiTietDonHangDto, Data.tChiTietDonHang>(json, query);
        }

        [HttpPost]
        public HttpResponseMessage Save([FromBody]string json)
        {
            return base.Save<ChiTietDonHangDto, Data.tChiTietDonHang>(json);
        }
    }
}