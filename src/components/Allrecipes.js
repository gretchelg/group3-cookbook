import { Link } from "react-router-dom";

export default function Allrecipes({recipes}) {
    return (
    <div>
        <h1 className="h1-allrecipes">
            All <span className="categorySpan">Recipes</span>
        </h1>   

        <div className="allrecipes-grid-container">
            {
            recipes.map((recipe) => (
            <Link to={`./${recipe.fields.id}`}>
                <div className="allrecipes-grid-item">
                    <img src={recipe.fields.pic.fields.file.url} alt={recipe.fields.recipeTitle} className="imgrecipes"  />
                    <p>{recipe.fields.recipeTitle}</p> 
                </div>  
            </Link> 
            ))  
            }
        </div>
    </div> 
    )
}