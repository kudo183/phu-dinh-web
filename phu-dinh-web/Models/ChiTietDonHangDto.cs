using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Data;

namespace phu_dinh_web.Models
{
    public class ChiTietDonHangDto : IDto<tChiTietDonHang>
    {
        public int Ma { get; set; }
        public int MaDonHang { get; set; }
        public string TenDonHang { get; set; }
        public int MaMatHang { get; set; }
        public int SoLuong { get; set; }

        public int GetKey()
        {
            return Ma;
        }

        public void FromEntity(tChiTietDonHang entity)
        {
            Ma = entity.Ma;
            MaDonHang = entity.MaDonHang;
            TenDonHang = string.Format("{0:dd/MM/yy}_{1}_{2}", entity.tDonHang.Ngay,
                entity.tDonHang.rKhoHang.TenKho, entity.tDonHang.rKhachHang.TenKhachHang);
            MaMatHang = entity.MaMatHang;
            SoLuong = entity.SoLuong;
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