using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phu_dinh_web.Models
{
    public interface IDto<T> where T : class
    {
        int GetKey();
        void FromEntity(T entity);
        T ToEntity();
    }
}