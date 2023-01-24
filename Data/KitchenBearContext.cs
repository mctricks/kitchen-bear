using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using KitchenBear.Data.Entity;

namespace KitchenBear.Data;

public partial class KitchenBearContext : DbContext
{
    public DbSet<Recipe> Recipes { get; set; } = null!;
    public DbSet<Ingredient> Ingredients { get; set; } = null!;

    public KitchenBearContext() { }

    public KitchenBearContext(DbContextOptions<KitchenBearContext> options)
        : base(options) { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=localhost\\SQLEXPRESS;Initial Catalog=KitchenBear-Dev;TrustServerCertificate=True;Integrated Security=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        OnModelCreatingPartial(modelBuilder);

        modelBuilder.Entity<Recipe>((entity) =>
        {
            entity.Property(r => r.Instructions)
                .HasConversion(
                    v => string.Join(";;;", v),
                    v => v.Split(";;;", StringSplitOptions.RemoveEmptyEntries));

            entity.Property(r => r.Tags)
                .HasConversion(
                    v => string.Join(";;;", v),
                    v => v.Split(";;;", StringSplitOptions.RemoveEmptyEntries));
        });
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
