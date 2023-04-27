import { Box, List, ListItem, ListItemText, Typography, Container} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({

    });

export default function Recipe() {
    return (
        <>
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{display: "flex", gap: "50px", backgroundColor: "#fad107", height: "100vh"}} >
        <Box flexDirection="column" marginTop="20px">
            <img src='https://placehold.co/400x300' alt='recipe'/>
        <List>
            <Typography variant="h5">
                Ingredients
            </Typography>
            <ListItem>
                <ListItemText primary="1st Ingredient"/>
            </ListItem>
            <ListItem>
                <ListItemText primary="2nd Ingredient"/>
            </ListItem>
        </List>
        </Box>
        <Box display="flex" gap="50px" flexDirection="column">
            <Typography variant="h3" sx={{marginTop: "50px"}}>
                Name
            </Typography>
                <Box display="flex" flexDirection="row" gap="50px">
                    <Typography variant='p'>
                        Preparation: 15 min
                    </Typography>
                    <Typography variant='p'>
                        Portions: 2 pers
                    </Typography>
                    <img src='https://placehold.co/200x50' alt='starts'/>
                </Box>
            <Box>
            <Typography variant='h5'>
                Instructions
            </Typography>
            <Typography variant='p'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            </Box>   
        </Box>
        </Container> 
        </ThemeProvider>
        </>
    );
}