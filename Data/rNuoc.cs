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
    
    public partial class rNuoc
    {
        public rNuoc()
        {
            this.rDiaDiems = new HashSet<rDiaDiem>();
        }
    
        public int Ma { get; set; }
        public string TenNuoc { get; set; }
    
        public virtual ICollection<rDiaDiem> rDiaDiems { get; set; }
    }
}