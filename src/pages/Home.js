import React,{useState} from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {

  const [loading,setLoading] =useState(false);
  const [searchTerm,setSearchTerm] =useState("");
  const [cocktails,setCocktails] =useState([]);
  return (
    <main>
      <h2>home page</h2>
    </main>
  )
}

export default Home
