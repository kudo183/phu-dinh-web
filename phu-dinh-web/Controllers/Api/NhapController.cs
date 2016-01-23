using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace phu_dinh_web.Controllers
{
    public class NhapController : BaseApiController
    {
        public List<string> GetNhapAsString(string json)
        {
            var filter = ExpressionBuilder.FilterExpression.FromJsonString(json);

            const int pageSize = 30;
            int pageCount;

            var query = ExpressionBuilder.FilterExpression.AddFilterExpression(
                _context.tNhapHangs
                    .Include(p => p.tChiTietNhapHangs)
                    .Include(p => p.rKhoHang)
                    .Include(p => p.rNhaCungCap)
                , filter, pageSize, out pageCount);

            return FormatResultAsString(query);
        }

        private List<string> FormatResultAsString(IQueryable<Data.tNhapHang> query)
        {
            var result = new List<string>();
            foreach (var nhapHang in query.ToList())
            {
                result.Add((nhapHang.tChiTietNhapHangs.Count + 1).ToString("N0"));
                result.Add(nhapHang.rNhaCungCap.TenNhaCungCap);
                foreach (var chiTietNhapHang in nhapHang.tChiTietNhapHangs)
                {
                    result.Add(string.Format("{0,-5:N0}", chiTietNhapHang.SoLuong) + chiTietNhapHang.tMatHang.TenMatHangDayDu);
                }
            }
            return result;
        }

    }
}