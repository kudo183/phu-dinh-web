using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace phu_dinh_web.Controllers
{
    public class XuatController : BaseApiController
    {
        public List<List<string>> GetXuat(string json)
        {
            var filter = ExpressionBuilder.FilterExpression.FromJsonString(json);
            var now = new DateTime(2015, 12, 10);
            const int pageSize = 300;
            int pageCount;

            AddDefaultDateFilter(filter, now);
            var query = ExpressionBuilder.FilterExpression.AddFilterExpression(
                _context.tDonHangs
                    .Include(p => p.tChiTietDonHangs)
                    .Include(p => p.rKhoHang)
                    .Include(p => p.rKhachHang)
                , filter, pageSize, out pageCount);

            return FormatResult(query);
        }

        public List<string> GetXuatAsString(string json)
        {
            var filter = ExpressionBuilder.FilterExpression.FromJsonString(json);
            var now = new DateTime(2015, 12, 10);
            const int pageSize = 300;
            int pageCount;

            AddDefaultDateFilter(filter, now);
            var query = ExpressionBuilder.FilterExpression.AddFilterExpression(
                _context.tDonHangs
                    .Include(p => p.tChiTietDonHangs)
                    .Include(p => p.rKhoHang)
                    .Include(p => p.rKhachHang)
                , filter, pageSize, out pageCount);

            return FormatResultAsString(query);
        }

        private List<List<string>> FormatResult(IQueryable<Data.tDonHang> query)
        {
            var result = new List<List<string>>();
            foreach (var donHang in query.ToList())
            {
                result.Add(new List<string> { donHang.rKhoHang.TenKho });
                result.Add(new List<string> { donHang.rKhachHang.TenKhachHang });
                result.Add(new List<string> { donHang.tChiTietDonHangs.Count.ToString("N0") });
                foreach (var chiTietDonHang in donHang.tChiTietDonHangs)
                {
                    result.Add(new List<string>
                    {
                        chiTietDonHang.tMatHang.TenMatHangDayDu,
                        chiTietDonHang.SoLuong.ToString("N0")
                    });
                }
            }
            return result;
        }

        private List<string> FormatResultAsString(IQueryable<Data.tDonHang> query)
        {
            var result = new List<string>();
            foreach (var donHang in query.ToList())
            {
                result.Add((donHang.tChiTietDonHangs.Count + 1).ToString("N0"));
                result.Add(donHang.rKhoHang.TenKho + " => " + donHang.rKhachHang.TenKhachHang);
                foreach (var chiTietDonHang in donHang.tChiTietDonHangs)
                {
                    result.Add(string.Format("{0,-5:N0}", chiTietDonHang.SoLuong) + chiTietDonHang.tMatHang.TenMatHangDayDu);
                }
            }
            return result;
        }

        private void AddDefaultDateFilter(ExpressionBuilder.FilterExpression filter, DateTime date)
        {
            if (filter.WhereOptions == null)
            {
                filter.WhereOptions = new List<ExpressionBuilder.WhereExpression.WhereOption>
                {
                    new ExpressionBuilder.WhereExpression.WhereOption
                        {
                            Predicate = "=",
                            PropertyPath = "Ngay",
                            Value = date.ToString("yyyy/MM/dd")
                        }
                };
                return;
            }
            if (filter.WhereOptions.Any(p => p.PropertyPath == "Ngay") == false)
            {
                filter.WhereOptions.Add(new ExpressionBuilder.WhereExpression.WhereOption
                {
                    Predicate = "=",
                    PropertyPath = "Ngay",
                    Value = date.ToString("yyyy/MM/dd")
                });
            }
        }
    }
}