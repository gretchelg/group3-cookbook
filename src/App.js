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
        <Route path="/" element={<Landingpage recipes = {recipes}/>} />
        <Route path="/:type" element={<Category recipes = {recipes} />} />
        <Route path="/:type/:id" element={<Recipe recipes = {recipes} />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
