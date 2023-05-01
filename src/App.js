import './App.css';
import { Client } from "./Client"
import { useState, useEffect } from 'react';
import Recipe from "./components/Recipe";
import { Routes, Route } from 'react-router';
import Landingpage from "./components/Landingpage";
import Category from "./components/Category";
import Navigation from "./components/Navigation";
import Errorpage from "./components/Errorpage";


function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    Client.getEntries().then((data) => {
      console.log(data.items)
      setRecipes(data.items)
      }).catch((error) => console.log(error));
  }, [])

  return (
    <div className="App">

      <Navigation />
{/* SETUP URL PATH     */}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/:type" element={<Category recipes = {recipes} />} />
        <Route path="/:type/:id" element={<Recipe recipes = {recipes} />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>


      {/* {recipes?.map( (recipe) => (
        <div>
        <h1>{recipe.fields.recipeTitle}</h1>
        <ul>
          <li>{recipe.fields.type}</li>
          <li>{recipe.fields.description}</li>
          <li>
            <img src={recipe.fields.pic.fields.file.url} alt={recipe.fields.recipeTitle} /></li>
        </ul>
          <div>
            <ol>
              {recipe.fields.ingredients.map ((item) => (
                <li>{item}</li>
              ))
              }
            </ol>
          </div>
      </div>
      ))} */}
    </div>
  );
}

export default App;
