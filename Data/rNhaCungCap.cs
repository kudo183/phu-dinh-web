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
    
    public partial class rNhaCungCap : IEntity
    {
        public rNhaCungCap()
        {
            this.tNhapHangs = new HashSet<tNhapHang>();
            this.tNhapNguyenLieux = new HashSet<tNhapNguyenLieu>();
        }
    
        public int Ma { get; set; }
        public string TenNhaCungCap { get; set; }
    
        public virtual ICollection<tNhapHang> tNhapHangs { get; set; }
        public virtual ICollection<tNhapNguyenLieu> tNhapNguyenLieux { get; set; }
    
        public int GetKey()
        {
            return Ma;
        }
    }
}
