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
    
    public partial class rLoaiChiPhi : IEntity
    {
        public rLoaiChiPhi()
        {
            this.tChiPhis = new HashSet<tChiPhi>();
        }
    
        public int Ma { get; set; }
        public string TenLoaiChiPhi { get; set; }
    
        public virtual ICollection<tChiPhi> tChiPhis { get; set; }
    
        public int GetKey()
        {
            return Ma;
        }
    }
}
