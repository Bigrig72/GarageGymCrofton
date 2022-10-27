import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from "./small-screen-nav";


const tiers = [
  {
    title: '1 Session',
    description: [
      '1. Purchase 1 single session',  
      '2. Experience what a program can do for you'         
    ],
    price: '100',
    buttonText: 'Pay Now',
    buttonVariant: 'outlined',
    href: "https://buy.stripe.com/4gwg0dckw5xfgBWdQV"
  },
  {
    title: '4 Pack',
    subheader: 'Good Savings',
    price: 'normally $360 --> NOW $320 --> $80 per session',
    description: [
      '1. Full 1 on 1 Access',
      '2. Program to get you started'     
    ],
    buttonText: 'Pay Now',
    buttonVariant: 'outlined',
    href: "https://buy.stripe.com/28o8xL0BO8JrgBW3cg"
  },
  {
    title: '8 Pack',   
    description: [
        '1. Full 1 on 1 Access',
        '2. Nutrition',
        '3. 24/7 Concierge',
        '4. Virtual Workouts When You Travel'
    ],
    price: 'normally $680 --> NOW $600 --> $75 per session',
    buttonText: 'Pay Now',
    buttonVariant: 'outlined',
    href: "https://buy.stripe.com/bIY6pD4S43p785qdQR"
  },
  {
    title: '12 Pack',   
    description: [
        'Full 1 on 1 Access',
        'Nutrition',
        '24/7 Concierge',
        'Virtual Workouts When You Travel'
    ],
    price: 'normally $960 --> NOW $800 --> $66 per session',
    buttonText: 'Pay Now',
    buttonVariant: 'outlined',
    href: "https://buy.stripe.com/4gw5lzesE9NvclGbIK"
  },
  {
    title: '24 Pack',   
    description: [
        'Full 1 on 1 Access',
        'Nutrition',
        '24/7 Concierge',
        'Virtual Workouts When You Travel'
    ],
    price: 'normally $1800 --> NOW $1200 --> $50 per session',
    buttonText: 'Pay Now',
    buttonVariant: 'outlined',
    href: "https://buy.stripe.com/6oE3drdoAgbT5Xi7sv"
  }
];

function PersonalTrainingRates() {
  return (
    <React.Fragment>
      <Header></Header>
      <Box style={{ backgroundColor: "black"}} >
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          sx={{ color: "purple"}}
          gutterBottom
        >
          Programs
        </Typography>       
      </Container>      
      <Container maxWidth="xl" component="main" >
        <Grid style={{height: ""}} container spacing={6}>
          {tiers.map((tier) => (            
            <Grid
              item
              key={tier.title}  
              style={{margin: "0px auto"}}           
            >
              <Card sx={{backgroundColor: "black", color: "purple", boxShadow: "1px 2px 28px whitesmoke", width: 400, marginBottom: "15px"}}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.price}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === '8 Pack' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: "black",
                    borderBottom: "1px solid purple"
                      
                  }}
                />
                <div style={{textAlign: "center", fontSize: "1.5 em"}}>{tier.price}</div>
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                      wrap: "nowrap"
                    }}
                  >                  
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"                      
                        align="left"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth href={tier.href} variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>    
      </Box> 
    </React.Fragment>
  );
}

export default function personalTraining() {
  return <PersonalTrainingRates />;
}
