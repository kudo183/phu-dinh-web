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
    
    public partial class tDonHang
    {
        public tDonHang()
        {
            this.tChiTietDonHangs = new HashSet<tChiTietDonHang>();
            this.tChuyenHangDonHangs = new HashSet<tChuyenHangDonHang>();
        }
    
        public int Ma { get; set; }
        public int MaKhachHang { get; set; }
        public Nullable<int> MaChanh { get; set; }
        public System.DateTime Ngay { get; set; }
        public bool Xong { get; set; }
        public int MaKhoHang { get; set; }
        public int TongSoLuong { get; set; }
    
        public virtual rChanh rChanh { get; set; }
        public virtual rKhachHang rKhachHang { get; set; }
        public virtual rKhoHang rKhoHang { get; set; }
        public virtual ICollection<tChiTietDonHang> tChiTietDonHangs { get; set; }
        public virtual ICollection<tChuyenHangDonHang> tChuyenHangDonHangs { get; set; }
    }
}