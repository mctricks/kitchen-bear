using KitchenBear.Data.Entity;

namespace KitchenBear.Data.Repositories;

public interface IIngredientRepository
{
}
public class IngredientRepository : IIngredientRepository
{
    protected readonly KitchenBearContext context;

    public IngredientRepository(KitchenBearContext context)
    {
        this.context = context;
    }
}