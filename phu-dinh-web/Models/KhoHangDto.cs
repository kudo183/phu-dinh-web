using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phu_dinh_web.Models
{
    public class KhoHangDto
    {
        public int Ma { get; set; }
        public string TenKho { get; set; }
        public bool TrangThai { get; set; }

        public KhoHangDto() { }
        public KhoHangDto(Data.rKhoHang khoHang)
        {
            Ma = khoHang.Ma;
            TenKho = khoHang.TenKho;
            TrangThai = khoHang.TrangThai;
        }
    }
}