import { Box, List, ListItem, ListItemText, Typography, Container, Divider, Rating} from '@mui/material'
import { useParams } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

export default function Recipe({recipes}) {
    const { id } = useParams();
    const singleRecipe = recipes?.find((recipe) => recipe.fields.id === id);
    const arrayofInstructions = singleRecipe?.fields.instructions.split("\n");
    
    return (
    <> 
        <Container maxWidth="lg" sx={{display: "flex", gap: "50px", flexWrap: "wrap"}} >
            <Box flexDirection="column" marginTop="20px">
                <img src={singleRecipe?.fields.pic.fields?.file.url} alt={singleRecipe?.fields.recipeTitle}/>
                <Typography variant="h5" sx={{paddingTop: "20px"}}>
                    Ingredients
                </Typography>
                {singleRecipe?.fields.ingredients.map ((item, index) => (
                    <List key={index} disablePadding={true}>
                        <ListItem sx={{padding: "5px"}}>
                            <LocalDiningIcon sx={{color: '#FFD230'}}/><ListItemText primary={item} sx={{paddingLeft: "10px"}}/>
                        </ListItem>
                        <Divider />
                    </List>
                ))}
                </Box>
                <Box display="flex" gap="50px" flexDirection="column" maxWidth="600px">
                    <Typography variant="h3" sx={{marginTop: "50px"}}>
                        {singleRecipe?.fields.recipeTitle}
                    </Typography>
                    <Typography variant="body1">
                        {singleRecipe?.fields.description}
                    </Typography>
                        <Box display="flex" flexDirection="row" gap="50px" alignItems={"center"}>
                            <Box display="flex" gap="10px" alignItems={"center"} sx={{backgroundColor: '#FFD230', padding: "20px 10px 20px 10px"}}>
                            <AccessTimeIcon/>
                            <Typography variant='body1'>
                            {singleRecipe?.fields.preparation}
                            </Typography>
                            <RestaurantIcon/>
                            <Typography variant='body1'>
                            2 servings
                            </Typography> 
                            </Box>
                            <Rating
                            value={singleRecipe?.fields.rating ?? 4}
                            precision={0.5}
                            readOnly 
                            />
                        </Box>
                <Box sx={{backgroundColor: 'lightgrey', padding: "20px"}}>
                    <Typography variant='h5'>
                        Instructions
                    </Typography>
                    
                        {arrayofInstructions?.map((step, i) => (
                            <List>
                            <ListItem key={i} disablePadding={true}>
                            <ListItemText primary={step}/>
                            </ListItem>
                            <Divider/>
                            </List> 
                        ))}
                </Box>   
            </Box>
        </Container> 
        
    </>
    );
}