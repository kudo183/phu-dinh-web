using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phu_dinh_web.Models
{
    public class XuatDto
    {
        public string TenKho { get; set; }
        public DateTime Ngay { get; set; }
        public string TenKhachHang { get; set; }
        public List<string> ChiTietDonHangs { get; set; }

        public XuatDto() { }

        public XuatDto(Data.tDonHang donHang)
        {
            TenKho = donHang.rKhoHang.TenKho;
            Ngay = donHang.Ngay;
            TenKhachHang = donHang.rKhachHang.TenKhachHang;

            ChiTietDonHangs = new List<string>();
            foreach (var ctdh in donHang.tChiTietDonHangs)
            {
                ChiTietDonHangs.Add(string.Format("{0,-5:N0}", ctdh.SoLuong) + ctdh.tMatHang.TenMatHangDayDu);
            }
        }
    }
}