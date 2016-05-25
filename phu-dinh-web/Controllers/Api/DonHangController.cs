using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;
using phu_dinh_web.Models;
using System.Data.Entity;

namespace phu_dinh_web.Controllers.Api
{
    public class DonHangController : BaseApiController
    {
        public GetResult<DonHangDto> Get(string json)
        {
            var filter = ExpressionBuilder.FilterExpression.FromJsonString(json);

            int pageCount;

            var query = ExpressionBuilder.FilterExpression.AddFilterExpression(
                _context.tDonHangs.Include(p => p.rKhachHang).Include(p => p.rKhoHang)
                , filter, Constant.DefaultPageSize, out pageCount);

            return new GetResult<DonHangDto>()
            {
                PageIndex = filter.PageIndex,
                PageCount = pageCount,
                Items = query.AsEnumerable().Select(p => new DonHangDto(p)).ToList()
            };
        }

        [HttpPost]
        public HttpResponseMessage Save([FromBody]string json)
        {
            var items = Helper.JsonConverter.Deserialize<List<ChangedItem<DonHangDto>>>(json);

            var added = new List<Data.tDonHang>();

            foreach (var changeItem in items)
            {
                Data.tDonHang item = null;
                switch (changeItem.State)
                {
                    case Constant.ChangeState.Insert:
                        item = changeItem.Data.ToEntity();
                        _context.tDonHangs.Add(item);
                        added.Add(item);
                        break;
                    case Constant.ChangeState.Update:
                        item = changeItem.Data.ToEntity();
                        _context.Entry(item).State = EntityState.Modified;
                        break;
                    case Constant.ChangeState.Delete:
                        item = _context.tDonHangs.Find(changeItem.Data.Ma);
                        if (item == null)
                        {
                            return Request.CreateResponse(HttpStatusCode.NotFound);
                        }
                        _context.tDonHangs.Remove(item);
                        break;
                    default:
                        return Request.CreateResponse(HttpStatusCode.InternalServerError);
                }
            }

            try
            {
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }

            return Request.CreateResponse(HttpStatusCode.OK, added.Select(p => p.Ma));
        }
    }
}