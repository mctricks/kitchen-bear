using KitchenBear.Data.Entity;

namespace KitchenBear.Data.Repositories;

public interface IIngredientRepository
{
    IEnumerable<Ingredient> Get();
}
public class IngredientRepository : IIngredientRepository
{
    protected readonly KitchenBearContext context;

    public IngredientRepository(KitchenBearContext context)
    {
        this.context = context;
    }

    public IEnumerable<Ingredient> Get()
    {
        return this.context.Ingredients.ToList();
    }
}