import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const app_id = "08f559bb";
  const app_key = "f9f05dbf1104bdba0abdbdf063b6c853";

  useEffect( () => {
    getRecipe();
    
  },[]);
   const getRecipe = async () =>
   {
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}`);
    console.log(result)

    setRecipes(result.data.hits);
}

const onSearch =() =>{
  getRecipe();
}

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="App">
        <Header search={search} onInputChange={onInputChange} onSearch={onSearch} />
       <div className="container">
       <Recipes recipes={recipes} />
       </div>
      </div>
    </>
  );
};

export default App;
