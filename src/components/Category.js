import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Client } from "../Client";
import { Link } from "react-router-dom";


export default function Category({recipes}) {
    const { type } = useParams();
    console.log("cookbook:", recipes);

    const filterByType = recipes?.filter((recipe) => recipe.fields.type === type); 
    console.log("array: ", filterByType)


    return (
        <div>
            {
                filterByType.map((recipe) => (
                    <div>
                        <Link to={`./${recipe.fields.id}`}>
                        <h1>{recipe.fields.recipeTitle}</h1>
                        </Link>
                        <p>{recipe.fields.type}</p>
                        <img src={recipe.fields.pic.fields.file.url} alt={recipe.fields.recipeTitle} />
                    </div>
                ) 
                    
                )
            }

        </div>

    );
}