using KitchenBear.Data.Entity;
using KitchenBear.Data.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace KitchenBear.Controllers;

[ApiController]
[Route("[controller]")]
public class RecipeController : ControllerBase
{
    // private readonly IRecipeRepository recipeRepository;
    // public RecipeController(IRecipeRepository recipeRepository)
    // {
    //     this.recipeRepository = recipeRepository;
    // }

    // [HttpGet]
    // public ActionResult<Recipe> Get(int id)
    // {
    //     var result = recipeRepository.Get(id);
    //     return result == null ? Ok(result) : NotFound();
    // }
}
