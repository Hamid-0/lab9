import { Link } from "react-router-dom";
import logo from "./Logo.png";
import { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import useFetch from "./useFetch";
const Home = () => {
  const { error, isPending, data: recipes } = useFetch('http://localhost:8000/recipes')

  return (
    <div className="home">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
       <div className="title"><h1>AllCooks.com</h1></div>
      <div className="homeB">
        <Link to="/explore"><button>Explore Recipes</button></Link>
        <Link to="/favourites"><button>Favourites</button></Link>
        <Link to="/faq"><button>Help</button></Link>
      </div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { recipes && <RecipeList recipes={recipes} /> }
    </div>
  );
}

export default Home;
