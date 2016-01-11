using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phu_dinh_web.Models
{
    public class rKhachHangDto
    {
        public int Ma { get; set; }
        public string TenKhachHang { get; set; }

        public rKhachHangDto() { }
        public rKhachHangDto(Data.rKhachHang khachHang)
        {
            Ma = khachHang.Ma;
            TenKhachHang = khachHang.TenKhachHang;
        }
        public Data.rKhachHang ToEntity()
        {
            var result = new Data.rKhachHang()
            {
                Ma = Ma,
                TenKhachHang = TenKhachHang
            };
            return result;
        }
    }
}