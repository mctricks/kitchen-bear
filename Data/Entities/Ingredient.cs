using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace KitchenBear.Data.Entity;

public class Ingredient
{
    public int id { get; set; }
    public string Name { get; set; } = "";
    public string Unit { get; set; } = "Units";
    public bool Stocked { get; set; } = false;
    public bool Perishable { get; set; } = false;
    public int Calories { get; set; } = 0;
    public float Price { get; set; } = 0;
    public IEnumerable<Recipe> Recipes { get; set; } = new List<Recipe>();
}