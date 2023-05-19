import { Box, List, ListItem, ListItemText, Typography, Container, Divider, Rating} from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

export default function Recipe({recipes, theme}) {
    const { id } = useParams();
    const navigate = useNavigate();

    const singleRecipe = recipes?.find((recipe) => recipe.id === Number(id));
    
    if (singleRecipe?.id === undefined) {
    navigate("/oops");
    }

    const arrayofInstructions = singleRecipe?.instruction.split("\r\n");
    const arrayofIngredients = singleRecipe?.ingredients.split("\r\n");


    return (
    <> 
        <Container maxWidth="lg" sx={{display: "flex", gap: "50px", flexWrap: "wrap"}} >
            <Box flexDirection="column" marginTop="20px">
                <img src={singleRecipe?.pic} alt={singleRecipe?.recipe_title}/>
                <Typography variant="h5" sx={{paddingTop: "20px"}}>
                    Ingredients
                </Typography>
                {arrayofIngredients?.map ((item, index) => (
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
                        {singleRecipe?.recipe_title}
                    </Typography>
                    <Typography variant="body1">
                        {singleRecipe?.description}
                    </Typography>
                        <Box display="flex" flexDirection="row" gap="50px" alignItems={"center"}>
                            <Box display="flex" gap="10px" alignItems={"center"} sx={{backgroundColor: '#FFD230', padding: "20px 10px 20px 10px"}}>
                            <AccessTimeIcon/>
                            <Typography variant='body1'>
                            {singleRecipe?.preparation}
                            </Typography>
                            <RestaurantIcon/>
                            <Typography variant='body1'>
                            2 servings
                            </Typography> 
                            </Box>
                            <Rating
                            value={singleRecipe?.rating ?? 4}
                            precision={0.5}
                            readOnly 
                            />
                        </Box>
                        {console.log(theme)}
                <Box sx={theme? {backgroundColor: '#252525', padding: "20px"} : {backgroundColor: 'lightgrey', padding: "20px"} }>
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