namespace phu_dinh_web.Models
{
    public class tTonKhoDto
    {
        public int Ma { get; set; }
        public int MaKhoHang { get; set; }
        public int MaMatHang { get; set; }
        public System.DateTime Ngay { get; set; }
        public int SoLuong { get; set; }
        public int SoLuongCu { get; set; }
        public string TenMatHang { get; set; }

        public tTonKhoDto() { }
        public tTonKhoDto(Data.tTonKho tonKho)
        {
            Ma = tonKho.Ma;
            MaKhoHang = tonKho.MaKhoHang;
            MaMatHang = tonKho.MaMatHang;
            Ngay = tonKho.Ngay;
            SoLuong = tonKho.SoLuong;
            SoLuongCu = tonKho.SoLuongCu;
            TenMatHang = tonKho.tMatHang == null ? "" : tonKho.tMatHang.TenMatHangDayDu;
        }

        public Data.tTonKho ToEntity()
        {
            var result = new Data.tTonKho()
            {
                Ma = Ma,
                MaKhoHang = MaKhoHang,
                MaMatHang = MaMatHang,
                Ngay = Ngay,
                SoLuong = SoLuong,
                SoLuongCu = SoLuongCu
            };
            return result;
        }
    }
}