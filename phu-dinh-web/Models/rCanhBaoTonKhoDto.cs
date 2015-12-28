using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phu_dinh_web.Models
{
    public class rCanhBaoTonKhoDto
    {
        public int Ma { get; set; }
        public int MaKhoHang { get; set; }
        public int MaMatHang { get; set; }
        public int TonCaoNhat { get; set; }
        public int TonThapNhat { get; set; }

        public rCanhBaoTonKhoDto() { }
        public rCanhBaoTonKhoDto(Data.rCanhBaoTonKho canhBaoTonKho)
        {
            Ma = canhBaoTonKho.Ma;
            MaKhoHang = canhBaoTonKho.MaKhoHang;
            MaMatHang = canhBaoTonKho.MaMatHang;
            TonCaoNhat = canhBaoTonKho.TonCaoNhat;
            TonThapNhat = canhBaoTonKho.TonThapNhat;
        }
        public Data.rCanhBaoTonKho ToEntity()
        {
            var result = new Data.rCanhBaoTonKho()
            {
                Ma = Ma,
                MaKhoHang = MaKhoHang,
                MaMatHang = MaMatHang,
                TonCaoNhat = TonCaoNhat,
                TonThapNhat = TonThapNhat
            };
            return result;
        }
    }
}