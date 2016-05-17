using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phu_dinh_web.Models
{
    public class ChangedItem<T>
    {
        public string State { get; set; }
        public T Data { get; set; }
    }
}