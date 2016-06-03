using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Data;

namespace phu_dinh_web.Models
{
    public class ChiTietDonHangDto
    {
        public int Ma { get; set; }
        public int MaDonHang { get; set; }
        public string TenDonHang { get; set; }
        public int MaMatHang { get; set; }
        public int SoLuong { get; set; }

        public ChiTietDonHangDto() { }

        public ChiTietDonHangDto(tChiTietDonHang chiTietDonHang)
        {
            Ma = chiTietDonHang.Ma;
            MaDonHang = chiTietDonHang.MaDonHang;
            TenDonHang = string.Format("{0:dd/MM/yy}_{1}_{2}", chiTietDonHang.tDonHang.Ngay,
                chiTietDonHang.tDonHang.rKhoHang.TenKho, chiTietDonHang.tDonHang.rKhachHang.TenKhachHang);
            MaMatHang = chiTietDonHang.MaMatHang;
            SoLuong = chiTietDonHang.SoLuong;
        }

        public tChiTietDonHang ToEntity()
        {
            return new tChiTietDonHang()
                       {
                           Ma = Ma,
                           MaDonHang = MaDonHang,
                           MaMatHang = MaMatHang,
                           SoLuong = SoLuong
                       };
        }
    }
}