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
    
    public partial class tChuyenHang : IEntity
    {
        public tChuyenHang()
        {
            this.tChuyenHangDonHangs = new HashSet<tChuyenHangDonHang>();
        }
    
        public int Ma { get; set; }
        public int MaNhanVienGiaoHang { get; set; }
        public System.DateTime Ngay { get; set; }
        public Nullable<System.TimeSpan> Gio { get; set; }
        public int TongDonHang { get; set; }
        public int TongSoLuongTheoDonHang { get; set; }
        public int TongSoLuongThucTe { get; set; }
    
        public virtual rNhanVien rNhanVien { get; set; }
        public virtual ICollection<tChuyenHangDonHang> tChuyenHangDonHangs { get; set; }
    
        public int GetKey()
        {
            return Ma;
        }
    }
}
