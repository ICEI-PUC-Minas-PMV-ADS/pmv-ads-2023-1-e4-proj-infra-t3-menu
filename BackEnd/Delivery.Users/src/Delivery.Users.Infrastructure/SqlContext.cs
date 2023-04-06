using Delivery.Users.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Delivery.Users.Infrastructure
{
    public class SqlContext : DbContext
    {
        public SqlContext(DbContextOptions<SqlContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
    }
}