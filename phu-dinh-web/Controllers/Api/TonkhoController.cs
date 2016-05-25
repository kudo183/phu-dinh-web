using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using phu_dinh_web.Models;
using System.Data.Entity;

namespace phu_dinh_web.Controllers
{
    public class TonkhoController : BaseApiController
    {
        public IEnumerable<tTonKhoDto> Get(string json)
        {
            var filter = ExpressionBuilder.FilterExpression.FromJsonString(json);

            var query = _context.tTonKhoes.Include(p => p.tMatHang);
            query = ExpressionBuilder.WhereExpression.AddWhereExpression(query, filter.WhereOptions);
            if (query.Count() > 1000)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.RequestEntityTooLarge));
            }
            query = ExpressionBuilder.OrderByExpression.AddOrderByExpression(query, filter.OrderOptions);
            return query.AsEnumerable().Select(p => new tTonKhoDto(p));
        }
    }
}