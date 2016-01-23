using System.Data.Entity;
using System.Linq;
using Data;

namespace PhuDinhOData
{
    [System.Web.Http.Authorize]
    public class BaseController<TEntity> : System.Web.Http.OData.EntitySetController<TEntity, int> where TEntity : class
    {
        protected readonly PhuDinhEntities _context = new PhuDinhEntities();

        [System.Web.Http.OData.EnableQuery(PageSize = 30, MaxExpansionDepth = 50)]
        public override IQueryable<TEntity> Get()
        {
            return _context.Set<TEntity>();
        }

        protected override TEntity GetEntityByKey(int key)
        {
            return _context.Set<TEntity>().Find(key);
        }

        protected override TEntity CreateEntity(TEntity entity)
        {
            var result = _context.Set<TEntity>().Add(entity);
            _context.SaveChanges();
            return result;
        }

        protected override int GetKey(TEntity entity)
        {
            return (int)entity.GetType().GetProperty("Ma").GetValue(entity);
        }

        public override void Delete(int key)
        {
            _context.Set<TEntity>().Remove(GetEntityByKey(key));
            _context.SaveChanges();
        }

        protected override TEntity UpdateEntity(int key, TEntity update)
        {
            _context.Set<TEntity>().Attach(update);
            _context.Entry(update).State = EntityState.Modified;
            _context.SaveChanges();
            return update;
        }

        protected override TEntity PatchEntity(int key, System.Web.Http.OData.Delta<TEntity> patch)
        {
            return UpdateEntity(key, patch.GetEntity());
        }
    }
}