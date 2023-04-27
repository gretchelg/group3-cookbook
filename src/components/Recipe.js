import { Box, List, ListItem, ListItemText, Typography, Container, Divider, Rating} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({

    });

export default function Recipe(props) {
    console.log("Timo", props)
    return (
        <> 
        {props.recipes.map( (recipe) => (
            <Container maxWidth="lg" sx={{display: "flex", gap: "50px", backgroundColor: "#fad107", borderRadius: "30px"}} >
        <Box flexDirection="column" marginTop="20px">
            <img src='https://placehold.co/400x300' alt='recipe'/>
        <Typography variant="h5">
                Ingredients
            </Typography>
        {recipe.fields.ingredients.map ((item) => (
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
                {recipe.fields.recipeTitle}
            </Typography>
            <Typography variant="p">
                {recipe.fields.description}
            </Typography>
                <Box display="flex" flexDirection="row" gap="50px">
                    <Typography variant='p'>
                        Preparation: {recipe.fields.preparation}
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
                {recipe.fields.instructions}
            </Typography>
            </Box>   
        </Box>
        </Container> 
        ))}
        </>
    );
}