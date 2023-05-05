import {  Button, Card, CardContent, CardMedia, Container, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from "react-router-dom";
import breakfast from "../images/breakfast.png"
import lunch from "../images/lunch.png";
import dinner from "../images/dinner.png";

export default function LandingPage() {
  const meals = [
    {
      title: 'breakfast',
      description: 'Start Your Day Right With Quick and Healthy Breakfast Ideas ',
      imageUrl: `${breakfast}`,
    },
    {
      title: 'lunch',
      description: 'Quick Lunch Ideas To Turn Your Work Day Around',
      imageUrl: `${lunch}`,
    },
    {
      title: 'dinner',
      description: `Easy Family Dinners For When You're Out Of Ideas`,
      imageUrl: `${dinner}`,
    },
  ];

  const CustomButton = styled(Button)({
    '&:hover': {
      backgroundColor: '#ffa726',
      transform: 'scale(1.05)',
    },
  });
  
  const CardBox = styled(Box)(({ mealtype }) => ({
    background: 'white',
    borderRadius: '1rem',
    transition: 'all 0.5s ease',
    '&:hover': {
      boxShadow: 6,
      transform: 'scale(1.02)',
      background: mealtype === 'Breakfast'
        ? 'linear-gradient(135deg, #f5a623 0%, #ff4e50 100%)'
        : mealtype === 'Lunch'
        ? 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)'
        : 'linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)',
    },
  }));

  return (
    // <Container maxWidth={false}  sx={{ backgroundColor: '#FFD230', height: '100%', padding: '2rem', display: 'flex', alignItems: 'flex-start', boxSizing: 'border-box' }}>
    <Container maxWidth="xl"  sx={{ backgroundColor: '#FFD230', minHeight: '100vh', padding: '2rem', display: 'flex', alignItems: 'flex-start', boxSizing: 'border-box' }}>
      <Grid container spacing={3} alignItems="flex-start" justifyContent="flex-start">
        <Grid item xs={12} md={3}>
        {/* <Grid item xs={isLargeScreen ? false : 12} md={isLargeScreen ? false : 3} lg={isLargeScreen ? true : false}> */}
        <Typography
            variant="h4"
            align="left"
            gutterBottom
            sx={{
                marginTop: '2rem',
                paddingTop: '3rem',
                paddingBottom: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'scale(1.1)' },
              }}> 
                Delicious food
                <br />
                for every mood
        </Typography>

        <Grid container justifyContent="center">
            <CustomButton variant="contained" color="primary"  style={{backgroundColor: '#000000'}}>
              Jump to recipe
            </CustomButton>
          </Grid>
        </Grid>

      {meals.map((meal, index) => (
      // <Grid item xs={12} sm={6} md={3} key={index} style={{ marginBottom: '2rem' }}>
      <Grid item xs={12} sm={6} md={3} key={index}>
        <div className="navbar">
          <NavLink to={`./${meal.title}`}>
        {/* <Link to={`./${meal.title}`}> */}
            <CardBox mealtype={meal.title}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={meal.imageUrl}
                    alt={meal.title}
                    sx={{ objectFit: 'cover', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                  />
              <Card
                    sx={{
                      height: '100%',
                      // borderRadius: '1rem',
                      overflow: 'hidden',
                    }}
                  >
                <CardContent
                        sx={{
                        height: '30%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                          }}
                      >
                    <Typography variant="h6" align="center" gutterBottom>
                      {meal.title}
                    </Typography>

                    <Typography align="center" variant="body2">
                      {meal.description}
                    </Typography>
                </CardContent>
              </Card>
            </CardBox>
          </NavLink>
        </div>
    </Grid>
        ))}
  </Grid>
</Container>
);
}