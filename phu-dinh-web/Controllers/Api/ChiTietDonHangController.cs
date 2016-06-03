using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using phu_dinh_web.Models;

namespace phu_dinh_web.Controllers.Api
{
    public class ChiTietDonHangController : BaseApiController
    {
        public GetResult<ChiTietDonHangDto> Get(string json)
        {
            var filter = ExpressionBuilder.FilterExpression.FromJsonString(json);

            int pageCount;

            var query = ExpressionBuilder.FilterExpression.AddFilterExpression(
                _context.tChiTietDonHangs.Include(p => p.tDonHang.rKhoHang).Include(p => p.tDonHang.rKhachHang)
                , filter, Constant.DefaultPageSize, out pageCount);

            return new GetResult<ChiTietDonHangDto>()
            {
                PageIndex = filter.PageIndex,
                PageCount = pageCount,
                Items = query.AsEnumerable().Select(p => new ChiTietDonHangDto(p)).ToList()
            };
        }

        [HttpPost]
        public HttpResponseMessage Save([FromBody]string json)
        {
            var items = Helper.JsonConverter.Deserialize<List<ChangedItem<ChiTietDonHangDto>>>(json);

            var added = new List<Data.tChiTietDonHang>();

            foreach (var changeItem in items)
            {
                Data.tChiTietDonHang item = null;
                switch (changeItem.State)
                {
                    case Constant.ChangeState.Insert:
                        item = changeItem.Data.ToEntity();
                        _context.tChiTietDonHangs.Add(item);
                        added.Add(item);
                        break;
                    case Constant.ChangeState.Update:
                        item = changeItem.Data.ToEntity();
                        _context.Entry(item).State = EntityState.Modified;
                        break;
                    case Constant.ChangeState.Delete:
                        item = _context.tChiTietDonHangs.Find(changeItem.Data.Ma);
                        if (item == null)
                        {
                            return Request.CreateResponse(HttpStatusCode.NotFound);
                        }
                        _context.tChiTietDonHangs.Remove(item);
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