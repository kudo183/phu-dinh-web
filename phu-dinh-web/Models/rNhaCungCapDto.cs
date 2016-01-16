using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phu_dinh_web.Models
{
    public class rNhaCungCapDto
    {
        public int Ma { get; set; }
        public string TenNhaCungCap { get; set; }

        public rNhaCungCapDto() { }
        public rNhaCungCapDto(Data.rNhaCungCap nhaCungCap)
        {
            Ma = nhaCungCap.Ma;
            TenNhaCungCap = nhaCungCap.TenNhaCungCap;
        }
        public Data.rNhaCungCap ToEntity()
        {
            var result = new Data.rNhaCungCap()
            {
                Ma = Ma,
                TenNhaCungCap = TenNhaCungCap
            };
            return result;
        }
    }
}