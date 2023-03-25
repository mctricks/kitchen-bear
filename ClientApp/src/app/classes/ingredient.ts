export interface IIngredient {
  id: number;
  name: string;
  unit: string;
  stocked: boolean;
  perishable: boolean;
  calories: number;
  price: number;
}
export class Ingredient implements IIngredient {
  public id: number = -1;
  public name: string = "";
  public unit: string = "Units";
  public stocked: boolean = false;
  public perishable: boolean = false;
  public calories: number = 0;
  public price: number = 0;
  // public IEnumerable<Recipe> Recipes { get; set; } = new List<Recipe>();
}
