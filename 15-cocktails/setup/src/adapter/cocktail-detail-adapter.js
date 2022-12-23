export const CocktailDetailAdapter = (data) => {
  const drink = data.drinks[0];

  const ingredients = Object.entries(drink).reduce((acc, curr) => {
    const [key, value] = curr;
    if(key.includes('strIngredient') && value){
      acc = [...acc, value]
    }
    return acc;
  }, [])

  return {
    name: drink.strDrink,
    category: drink.strCategory,
    info: drink.strAlcoholic,
    glass: drink.strGlass,
    instructions: drink.strInstructions,
    image: drink.strDrinkThumb,
    ingredients
  }
}