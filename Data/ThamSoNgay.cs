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
    
    public partial class ThamSoNgay : IEntity
    {
        public int Ma { get; set; }
        public string Ten { get; set; }
        public System.DateTime GiaTri { get; set; }
    
        public int GetKey()
        {
            return Ma;
        }
    }
}
