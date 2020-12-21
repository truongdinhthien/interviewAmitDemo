using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Database
{
    public static class SeedData
    {
        public static async Task SeedAppDb(AppDbContext context)
        {
            if(!context.Products.Any())
            {
                context.AddRange(new List<Category>
                { 
                    new Category {
                        Description = "Des 1",
                        Name ="Category 1",
                    },
                    new Category {
                        Description = "Des 2",
                        Name ="Category 2",
                    },
                });
                await context.SaveChangesAsync();
            }    
            if(!context.Products.Any())
            {
                context.AddRange(new List<Product>
                {
                    new Product
                    {
                        Name = "Name 1",
                        SKU = "SKU 1",
                        LongDescription="Long des 1",
                        ShortDescription="Short des 1",
                        CategoryId = 1,
                    },
                    new Product
                    {
                        Name = "Name 2",
                        SKU = "SKU 2",
                        LongDescription="Long des 2",
                        ShortDescription="Short des 2",
                        CategoryId = 2,
                    },
                    new Product
                    {
                        Name = "Name 3",
                        SKU = "SKU 3",
                        LongDescription="Long des 3",
                        ShortDescription="Short des 3",
                        CategoryId = 1,
                    },
                }) ;
                await context.SaveChangesAsync();
            }    
        }
    }
}
