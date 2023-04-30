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
