using MasterEvents.Persistence.Context;
using MasterEvents.Persistence.Interfaces;
using System.Threading.Tasks;

namespace MasterEvents.Persistence.Repository
{
    public class GeralRepository : IGeralRepository
    {
        private readonly MasterEventsContext _context;

        public GeralRepository(MasterEventsContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public void DeleteRange<T>(T[] entityArray) where T : class
        {
            _context.RemoveRange(entityArray);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
