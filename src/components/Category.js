import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Client } from "../Client";
import { Link,useNavigate } from "react-router-dom";


export default function Category() {
    const { type } = useParams();
    console.log(type);

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
    Client.getEntries().then((data) => {
        setRecipes(data.items)
        }).catch((error) => console.log(error));
    }, [])

    const filterByType = recipes?.filter((recipe) => recipe.fields.type === type); 
    console.log("array: ", filterByType)


    return (
        <div>
            {
                filterByType.map((recipe) => (
                    <div>
                        {/* <Link to={`./${recipe.fields.type}/${recipe.fields.id}`}> */}
                        <Link to="./recipe">
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