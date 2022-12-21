
export const CocktailAdapter = (cocktail) => {
  return {
    id: cocktail.idDrink,
    name: cocktail.strDrink,
    glass: cocktail.strGlass,
    type: cocktail.strAlcoholic,
    image: cocktail.strDrinkThumb
  }
}