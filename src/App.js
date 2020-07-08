import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';

const App = () =>
{

   const [search,setSearch]  =useState(""); 
   const [recipes,setRecipes] = useState([]);

   const app_id = "08f559bb";
   const app_key = "f9f05dbf1104bdba0abdbdf063b6c853";

   const onInputChange = (e) =>{
     setSearch(e.target.value);
   }
  return(
    <>
  <div className="App">
    <Header search={search} onInputChange={onInputChange} />
    <Recipes />
    </div>
    </>


  )

}

export default App;
