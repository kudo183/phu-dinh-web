//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class tChuyenHangDonHang
    {
        public tChuyenHangDonHang()
        {
            this.tChiTietChuyenHangDonHangs = new HashSet<tChiTietChuyenHangDonHang>();
        }
    
        public int Ma { get; set; }
        public int MaChuyenHang { get; set; }
        public int MaDonHang { get; set; }
        public int TongSoLuongTheoDonHang { get; set; }
        public int TongSoLuongThucTe { get; set; }
    
        public virtual ICollection<tChiTietChuyenHangDonHang> tChiTietChuyenHangDonHangs { get; set; }
        public virtual tChuyenHang tChuyenHang { get; set; }
        public virtual tDonHang tDonHang { get; set; }
    }
}