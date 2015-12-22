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
    public class TonkhoController : BaseApiController
    {
        public IEnumerable<tTonKhoDto> GettTonKhoes(string json)
        {
            var filter = ExpressionBuilder.FilterExpression.FromJsonString(json);
            var now = DateTime.Now.Date;
            const int pageSize = 300;
            int pageCount;

            AddDefaultDateFilter(filter, now);
            var query = ExpressionBuilder.FilterExpression.AddFilterExpression(
                _context.tTonKhoes.Include(p => p.tMatHang)
                , filter, pageSize, out pageCount);

            return query.AsEnumerable().Select(p => new tTonKhoDto(p));
        }

        private void AddDefaultDateFilter(ExpressionBuilder.FilterExpression filter, DateTime date)
        {
            if (filter.WhereOptions == null)
            {
                filter.WhereOptions = new List<ExpressionBuilder.WhereExpression.WhereOption>
                {
                    new ExpressionBuilder.WhereExpression.WhereOption
                        {
                            Predicate = "=",
                            PropertyPath = "Ngay",
                            Value = date.ToString("yyyy/MM/dd")
                        }
                };
                return;
            }
            if (filter.WhereOptions.Any(p => p.PropertyPath == "Ngay") == false)
            {
                filter.WhereOptions.Add(new ExpressionBuilder.WhereExpression.WhereOption
                {
                    Predicate = "=",
                    PropertyPath = "Ngay",
                    Value = date.ToString("yyyy/MM/dd")
                });
            }
        }
    }
}