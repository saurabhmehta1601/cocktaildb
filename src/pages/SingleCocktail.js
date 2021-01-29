import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const id=useParams()

const SingleCocktail = () => {

  const {id}=useParams()
  const [loading,setLoading]=React.useState(false)
  const [cocktail,setCocktail]=React.useState(null)

  React.useEffect(() =>{
    setLoading(true)

    async function getCocktail(){

     try {
      const response= await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data= await response.json()

      if(data.drinks){
        const {strDrink:name,strDrinkThumb:image,strCategory:category,strAlcoholic:info,strGlass:glass,strInstructions:instructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = data.drinks[0]

        const ingredients=[strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]
        const newCocktail={name,image,info,category,glass,instructions,ingredients}
        setCocktail(newCocktail)
      }else{
        setCocktail(null)
      }

     
     } catch (error) {
     
     }
     setLoading(false)
    }


    getCocktail()
    
  },[id])
  return (
    <div>
      <h2>single cocktail page with  id {id} </h2>
    </div>
  )
}

export default SingleCocktail
