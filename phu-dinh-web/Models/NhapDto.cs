using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phu_dinh_web.Models
{
    public class NhapDto
    {
        public string TenKho { get; set; }
        public DateTime Ngay { get; set; }
        public string TenNhaCungCap { get; set; }
        public List<string> ChiTietNhapHangs { get; set; }

        public NhapDto() { }

        public NhapDto(Data.tNhapHang nhapHang)
        {
            TenKho = nhapHang.rKhoHang.TenKho;
            Ngay = nhapHang.Ngay;
            TenNhaCungCap = nhapHang.rNhaCungCap.TenNhaCungCap;

            ChiTietNhapHangs = new List<string>();
            foreach (var ctnh in nhapHang.tChiTietNhapHangs)
            {
                ChiTietNhapHangs.Add(string.Format("{0,-5:N0}", ctnh.SoLuong) + ctnh.tMatHang.TenMatHangDayDu);
            }
        }
    }
}