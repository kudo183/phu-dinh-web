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
    
    public partial class tChiTietDonHang
    {
        public tChiTietDonHang()
        {
            this.tChiTietChuyenHangDonHangs = new HashSet<tChiTietChuyenHangDonHang>();
            this.tChiTietToaHangs = new HashSet<tChiTietToaHang>();
        }
    
        public int Ma { get; set; }
        public int MaDonHang { get; set; }
        public int MaMatHang { get; set; }
        public int SoLuong { get; set; }
        public bool Xong { get; set; }
    
        public virtual ICollection<tChiTietChuyenHangDonHang> tChiTietChuyenHangDonHangs { get; set; }
        public virtual tDonHang tDonHang { get; set; }
        public virtual tMatHang tMatHang { get; set; }
        public virtual ICollection<tChiTietToaHang> tChiTietToaHangs { get; set; }
    }
}
