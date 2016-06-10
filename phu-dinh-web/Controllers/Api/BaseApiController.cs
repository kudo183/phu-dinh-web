using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using phu_dinh_web.Filters;
using phu_dinh_web.Models;

namespace phu_dinh_web.Controllers
{
    [System.Web.Http.Authorize]
    [ValidateHttpAntiForgeryToken]
    public abstract class BaseApiController : System.Web.Http.ApiController
    {
        protected Data.PhuDinhEntities _context = new Data.PhuDinhEntities();

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
            base.Dispose(disposing);
        }

        protected GetResult<T> Get<T, T1>(string json, IQueryable<T1> includedQuery)
            where T : class, IDto<T1>, new()
            where T1 : class, Data.IEntity
        {
            var filter = ExpressionBuilder.FilterExpression.FromJsonString(json);

            int pageCount;

            var query = ExpressionBuilder.FilterExpression.AddFilterExpression(
                includedQuery, filter, Constant.DefaultPageSize, out pageCount);

            return new GetResult<T>
                       {
                           PageIndex = filter.PageIndex,
                           PageCount = pageCount,
                           Items = query.AsEnumerable().Select(p =>
                           {
                               var a = new T();
                               a.FromEntity(p);
                               return a;
                           }).ToList()
                       };
        }

        protected HttpResponseMessage Save<T, T1>(string json)
            where T : class, IDto<T1>
            where T1 : class, Data.IEntity
        {
            var items = Helper.JsonConverter.Deserialize<List<ChangedItem<T>>>(json);

            var added = new List<T1>();

            foreach (var changeItem in items)
            {
                T1 item;
                switch (changeItem.State)
                {
                    case Constant.ChangeState.Insert:
                        item = changeItem.Data.ToEntity();
                        _context.Set<T1>().Add(item);
                        added.Add(item);
                        break;
                    case Constant.ChangeState.Update:
                        item = changeItem.Data.ToEntity();
                        _context.Entry(item).State = EntityState.Modified;
                        break;
                    case Constant.ChangeState.Delete:
                        item = _context.Set<T1>().Find(changeItem.Data.GetKey());
                        if (item == null)
                        {
                            return Request.CreateResponse(HttpStatusCode.NotFound);
                        }
                        _context.Set<T1>().Remove(item);
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

            return Request.CreateResponse(HttpStatusCode.OK, added.Select(p => p.GetKey()));
        }
    }
}