using GarageGym.Models;
using Microsoft.EntityFrameworkCore;

namespace GarageGym.Data
{
    public class MyDbContext : DbContext
    {
       

        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Department>().HasData(new Department { DepartmentId = 1, DepartmentName = "Regan"});
            modelBuilder.Entity<Department>().HasData(new Department { DepartmentId = 2, DepartmentName = "Dufort" });
        }

        public DbSet<Department> Department { get; set; }
        public DbSet<Employee> Employee { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
