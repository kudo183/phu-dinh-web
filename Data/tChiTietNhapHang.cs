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
    
    public partial class tChiTietNhapHang
    {
        public int Ma { get; set; }
        public int MaNhapHang { get; set; }
        public int MaMatHang { get; set; }
        public int SoLuong { get; set; }
    
        public virtual tNhapHang tNhapHang { get; set; }
        public virtual tMatHang tMatHang { get; set; }
    }
}