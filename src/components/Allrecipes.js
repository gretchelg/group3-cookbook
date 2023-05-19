import { Link } from "react-router-dom";

export default function Allrecipes({recipes, theme}) {
    return (
    <div>
        <h1 className="h1-allrecipes">
            All <span className="categorySpan">Recipes</span>
        </h1>   

        <div className="allrecipes-grid-container">
            {
            recipes.map((recipe) => (
            <Link to={`./${recipe?.id}`}>
                <div className="allrecipes-grid-item">
                    <img src={recipe.pic} alt={recipe.recipe_title} className="imgrecipes"  />
                    <p style={theme? {color: '#fff'} : {color: '#000'}}>{recipe.recipe_title}</p> 
                </div>  
            </Link> 
            ))  
            }
        </div>
    </div> 
    )
}