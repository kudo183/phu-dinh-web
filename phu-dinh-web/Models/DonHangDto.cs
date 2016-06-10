using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Data;

namespace phu_dinh_web.Models
{
    public class DonHangDto : IDto<tDonHang>
    {
        public int Ma { get; set; }
        public DateTime Ngay { get; set; }
        public int MaKhachHang { get; set; }
        public int MaKhoHang { get; set; }
        public int? MaChanh { get; set; }

        public int GetKey()
        {
            return Ma;
        }

        public void FromEntity(tDonHang entity)
        {
            Ma = entity.Ma;
            Ngay = entity.Ngay;
            MaKhachHang = entity.MaKhachHang;
            MaKhoHang = entity.MaKhoHang;
            MaChanh = entity.MaChanh;
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