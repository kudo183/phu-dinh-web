using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phu_dinh_web.Models
{
    public class GetResult<T>
    {
        public int TotalItemCount { get; set; }
        public int PageIndex { get; set; }
        public int PageCount { get; set; }
        public List<T> Items { get; set; } 
    }
}