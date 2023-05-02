import './App.css';
import { Client } from "./Client"
import { useState, useEffect } from 'react';
import Landingpage from './components/Landingpage';




function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  useEffect(() => {
    Client.getEntries().then((data) => {
      console.log(data.items)
      setRecipes(data.items)
      }).catch((error) => console.log(error));
  }, [])
  // const arrayIngredients = recipe.fields.ingredients 

  return (
    <div className="App">
      
      <Landingpage/>
      {recipes?.map( (recipe) => (
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
      ))}
    </div>
  );
}

export default App;
