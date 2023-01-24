using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace KitchenBear.Data.Entity;

public class Recipe
{
    public int id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public int Servings { get; set; } = 0;
    public IEnumerable<string> Instructions { get; set; } = new List<string>();
    public IEnumerable<string> Tags { get; set; } = new List<string>();
    public IEnumerable<Ingredient> Ingredients { get; set; } = new List<Ingredient>();
}