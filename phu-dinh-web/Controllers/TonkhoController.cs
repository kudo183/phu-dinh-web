using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using phu_dinh_web.Models;
using System.Data.Entity;

namespace phu_dinh_web.Controllers
{
    public class TonkhoController : ApiController
    {
        private Data.PhuDinhEntities _context = new Data.PhuDinhEntities();
        public IEnumerable<tTonKhoDto> GettTonKhoes()
        {
            //var now = DateTime.Now.Date;
            var now = new DateTime(2015, 12, 10);
            return _context.tTonKhoes
                .Where(p => p.Ngay == now)
                .Include(p => p.tMatHang)
                .AsEnumerable().Select(p => new tTonKhoDto(p));
        }
    }
}