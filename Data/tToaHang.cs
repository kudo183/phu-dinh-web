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
    
    public partial class tToaHang
    {
        public tToaHang()
        {
            this.tChiTietToaHangs = new HashSet<tChiTietToaHang>();
        }
    
        public int Ma { get; set; }
        public System.DateTime Ngay { get; set; }
        public int MaKhachHang { get; set; }
    
        public virtual rKhachHang rKhachHang { get; set; }
        public virtual ICollection<tChiTietToaHang> tChiTietToaHangs { get; set; }
    }
}
