using KitchenBear.Data.Entity;

namespace KitchenBear.Data.Repositories;

public interface IRecipeRepository
{
    Recipe? Get(int id);
}
public class RecipeRepository : IRecipeRepository
{
    protected readonly KitchenBearContext context;

    public RecipeRepository(KitchenBearContext context)
    {
        this.context = context;
    }
    public Recipe? Get(int id)
    {
        return context.Recipes.Find(id);
    }
}