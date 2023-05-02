import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Client } from "../Client";
import { Link } from "react-router-dom";
import { Container, Typography, Grid, Paper } from "@mui/material";
import "./Category.css";


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


import { Container, Typography, Grid, Paper } from "@mui/material";
import "./Category.css";
export default function Category({ recipes }) {
  function CategoryItem() {
    return recipes.recipes?.map((recipe) => {
      if (recipe.fields.type === "breakfast") {
        return (
          <Grid item xs={12} sm={6} md={4} sx={{ padding: 1 }}>
            <Paper className="gridItem" elevation={3}>
              <img
                className="categoryImg"
                src={recipe.fields.pic.fields.file.url}
                alt=""
              />

              <Typography variant="h6" align="center">
                {recipe.fields.recipeTitle}
              </Typography>
            </Paper>
          </Grid>
        );
      }
    });
  }
  return (
    <div>
      <Container>
        <div className="categoryHeading">
          <div>
            <h1>
              All <span className="categorySpan">Breakfast</span>
            </h1>
          </div>
        </div>
        <Grid container rowSpacing={5}>
          <CategoryItem />
        </Grid>
      </Container>
    </div>
  );
}

