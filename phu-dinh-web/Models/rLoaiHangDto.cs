using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phu_dinh_web.Models
{
    public class rLoaiHangDto
    {
        public int Ma { get; set; }
        public string TenLoai { get; set; }

        public rLoaiHangDto(){}
        public rLoaiHangDto(Data.rLoaiHang loaiHang)
        {
            Ma = loaiHang.Ma;
            TenLoai = loaiHang.TenLoai;
        }
        public Data.rLoaiHang ToEntity()
        {
            var result = new Data.rLoaiHang()
            {
                Ma = Ma,
                TenLoai = TenLoai
            };
            return result;
        }
    }
}