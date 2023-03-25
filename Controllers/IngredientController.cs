using KitchenBear.Data.Entity;
using KitchenBear.Data.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace KitchenBear.Controllers;

[ApiController]
[Route("api/[controller]")]
public class IngredientController : ControllerBase
{
    private readonly IIngredientRepository ingredientRepository;
    public IngredientController(IIngredientRepository ingredientRepository)
    {
        this.ingredientRepository = ingredientRepository;
    }

    [HttpGet]
    public ActionResult<Recipe> Get()
    {
        var result = ingredientRepository.Get();
        return result == null ? Ok(result) : NotFound();
    }
}
