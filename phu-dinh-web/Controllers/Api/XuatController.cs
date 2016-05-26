﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Data.Entity;
using System.Web.Http;
using Data;
using phu_dinh_web.Models;

namespace phu_dinh_web.Controllers
{
    public class XuatController : BaseApiController
    {
        public IEnumerable<XuatDto> Get(string json)
        {
            var filter = ExpressionBuilder.FilterExpression.FromJsonString(json);

            var query = _context.tDonHangs
                .Include("tChiTietDonHangs.tMatHang")
                .Include(p => p.rKhoHang)
                .Include(p => p.rKhachHang);
            query = ExpressionBuilder.WhereExpression.AddWhereExpression(query, filter.WhereOptions);
            if (query.Count() > 200)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.RequestEntityTooLarge));
            }
            query = ExpressionBuilder.OrderByExpression.AddOrderByExpression(query, filter.OrderOptions);
            return query.AsEnumerable().Select(p => new XuatDto(p));
        }
    }
}