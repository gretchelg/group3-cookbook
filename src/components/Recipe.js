import { Box, List, ListItem, ListItemText, Typography, Container, Divider, Rating} from '@mui/material'
import { useParams } from 'react-router-dom';

export default function Recipe({recipes}) {
    const { id } = useParams();
    const singleRecipe = recipes?.find((recipe) => recipe.fields.id === id); 

    console.log({id, recipes, singleRecipe})

    return (
    <> 
        <Container sx={{display: "flex", gap: "50px"}} >
            <Box flexDirection="column" marginTop="20px">
                <img src='https://placehold.co/400x300' alt='recipe'/>
                <Typography variant="h5">
                    Ingredients
                </Typography>
                {singleRecipe?.fields.ingredients.map ((item) => (
                    <List>
                        <ListItem>
                            <ListItemText primary={item}/>
                        </ListItem>
                        <Divider />
                    </List>
                ))}
                </Box>
                <Box display="flex" gap="50px" flexDirection="column">
                    <Typography variant="h3" sx={{marginTop: "50px"}}>
                        {singleRecipe?.fields.recipeTitle}
                    </Typography>
                    <Typography variant="p">
                        {singleRecipe?.fields.description}
                    </Typography>
                        <Box display="flex" flexDirection="row" gap="50px">
                            <Typography variant='p'>
                                Preparation: {singleRecipe?.fields.preparation}
                            </Typography>
                            <Typography variant='p'>
                                Portions: 2 pers
                            </Typography>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                        </Box>
                <Box>
                    <Typography variant='h5'>
                        Instructions
                    </Typography>
                    <Typography variant='p'>
                        {singleRecipe?.fields.instructions}
                    </Typography>
                </Box>   
            </Box>
        </Container> 
        
    </>
    );
}