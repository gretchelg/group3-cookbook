import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Container, Typography, Grid, Paper } from "@mui/material";
import "./Category.css";

export default function Category({recipes}) {
    const { type } = useParams();
    const navigate = useNavigate();
    if (!["breakfast", "lunch", "dinner"].includes(type)){
      navigate("/oops");
    }
    const filterByType = recipes?.filter((recipe) => recipe.type === type); 

    return (
      <div className="navbar">
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
                  <NavLink to={`./${recipe.id}`}> 
                      <Paper className="gridItem" elevation={3}>
                        <img
                          className="categoryImg"
                          src={recipe.pic}
                          alt=""
                        />
                        <Typography variant="h6" align="center">
                          {recipe.recipe_title}
                        </Typography>
                      </Paper>
                  </NavLink>
            </Grid>
            
            ))
          }
          </Grid>
        </Container>     
      </div>               
    )
  };