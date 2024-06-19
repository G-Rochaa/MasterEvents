using MasterEvents.Models;
using Microsoft.EntityFrameworkCore;

namespace MasterEvents.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }
        public  DbSet<Evento> Eventos { get; set; }
    }
}
