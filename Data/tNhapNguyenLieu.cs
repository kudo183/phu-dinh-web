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
    
    public partial class tNhapNguyenLieu
    {
        public int Ma { get; set; }
        public System.DateTime Ngay { get; set; }
        public int MaNguyenLieu { get; set; }
        public int MaNhaCungCap { get; set; }
        public int SoLuong { get; set; }
    
        public virtual rNguyenLieu rNguyenLieu { get; set; }
        public virtual rNhaCungCap rNhaCungCap { get; set; }
    }
}