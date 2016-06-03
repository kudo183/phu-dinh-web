using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phu_dinh_web.Models
{
    public class tMatHangDto
    {
        public int Ma { get; set; }
        public string TenMatHang { get; set; }

        public tMatHangDto() { }
        public tMatHangDto(Data.tMatHang matHang)
        {
            Ma = matHang.Ma;
            TenMatHang = matHang.TenMatHang;
        }
        public Data.tMatHang ToEntity()
        {
            var result = new Data.tMatHang()
            {
                Ma = Ma,
                TenMatHang = TenMatHang
            };
            return result;
        }
    }
}