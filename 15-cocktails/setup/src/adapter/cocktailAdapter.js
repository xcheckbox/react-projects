
export const CocktailAdapter = (data) => {

  const { drinks } = data;

  return drinks.map( drink => ({
      id: drink.idDrink,
      name: drink.strDrink,
      glass: drink.strGlass,
      type: drink.strAlcoholic,
      image: drink.strDrinkThumb
  }))
}