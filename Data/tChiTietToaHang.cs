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
    
    public partial class tChiTietToaHang : IEntity
    {
        public int Ma { get; set; }
        public int MaToaHang { get; set; }
        public int MaChiTietDonHang { get; set; }
        public int GiaTien { get; set; }
    
        public virtual tChiTietDonHang tChiTietDonHang { get; set; }
        public virtual tToaHang tToaHang { get; set; }
    
        public int GetKey()
        {
            return Ma;
        }
    }
}
