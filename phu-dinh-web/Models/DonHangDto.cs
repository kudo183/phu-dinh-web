using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Data;

namespace phu_dinh_web.Models
{
    public class DonHangDto
    {
        public int Ma { get; set; }
        public DateTime Ngay { get; set; }
        public int MaKhachHang { get; set; }
        public int MaKhoHang { get; set; }
        public int? MaChanh { get; set; }

        public DonHangDto() { }

        public DonHangDto(tDonHang donHang)
        {
            Ma = donHang.Ma;
            Ngay = donHang.Ngay;
            MaKhachHang = donHang.MaKhachHang;
            MaKhoHang = donHang.MaKhoHang;
            MaChanh = donHang.MaChanh;
        }

        public tDonHang ToEntity()
        {
            return new tDonHang()
                       {
                           Ma = Ma,
                           Ngay = Ngay,
                           MaKhachHang = MaKhachHang,
                           MaKhoHang = MaKhoHang,
                           MaChanh = MaChanh
                       };
        }
    }
}