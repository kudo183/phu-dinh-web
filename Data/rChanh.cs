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
    
    public partial class rChanh
    {
        public rChanh()
        {
            this.rKhachHangChanhs = new HashSet<rKhachHangChanh>();
            this.tDonHangs = new HashSet<tDonHang>();
        }
    
        public int Ma { get; set; }
        public int MaBaiXe { get; set; }
        public string TenChanh { get; set; }
    
        public virtual rBaiXe rBaiXe { get; set; }
        public virtual ICollection<rKhachHangChanh> rKhachHangChanhs { get; set; }
        public virtual ICollection<tDonHang> tDonHangs { get; set; }
    }
}
