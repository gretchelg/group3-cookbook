import { useParams } from "react-router-dom";
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
        <Container>
          <div className="categoryHeading">
            <div>
              <h1>
                All <span className="categorySpan">{type}</span>
              </h1>
            </div>
          </div>
          <Grid container rowSpacing={5}>
          {
            filterByType.map((recipe) => ( 
            <Grid item xs={12} sm={6} md={4} sx={{ padding: 1 }}>
              <Link to={`./${recipe.fields.id}`}> 
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
              </Link>
            </Grid>
            ))
          }
          </Grid>
        </Container>     
      </div>               
    )
  };