using Microsoft.EntityFrameworkCore;
using svet_api.Models;

namespace svet_api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<TokenUsuario> Tokens { get; set; }

    }
}
