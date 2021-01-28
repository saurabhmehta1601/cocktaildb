import React, { useState, useEffect } from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("mar");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    setLoading(true)
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        const { drinks } = data;
        console.log(drinks);
        if (drinks) {
        const newCocktails =drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = item;
            return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
          });

          setCocktails(newCocktails)
        } else {
          setCocktails([])
        }
      } catch (error) {

    }setLoading(false)
  }
    getDrinks();
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={searchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
};

export default Home;
