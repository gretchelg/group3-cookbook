import { Box, List, ListItem, ListItemText, Typography, Container, Divider, Rating} from '@mui/material'
import { useParams } from 'react-router-dom';

export default function Recipe({recipes}) {
    const { id } = useParams();

    const singleRecipe = recipes?.find((recipe) => recipe.fields.id === id); 

    return (
    <> 
        <Container sx={{display: "flex", gap: "50px"}} >
            <Box flexDirection="column" marginTop="20px">
                <img src={singleRecipe?.fields.pic.fields?.file.url} alt='recipe'/>
                <Typography variant="h5">
                    Ingredients
                </Typography>
                {singleRecipe?.fields.ingredients.map ((item, index) => (
                    <List key={index}>
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
                            <Rating
                            value={singleRecipe?.fields.rating ?? 4}
                            readOnly 
                            />
                        </Box>
                <Box>
                    <Typography variant='h5'>
                        Instructions
                    </Typography>
                    <Typography>
                        {singleRecipe?.fields.instructions}
                    </Typography>
                </Box>   
            </Box>
        </Container> 
        
    </>
    );
}