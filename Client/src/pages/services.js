import React,{useState} from 'react';
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

const tiers = [
  {
    title: 'Complimentary Session',
    description: [
      '1. 1 on 1 Assessment',
      '2. BF & Metabolic Analysis',
      '3. See where you Health and Fitness Level is'      
    ],
    buttonText: 'Schedule now!',
    buttonVariant: 'outlined',
  },
  {
    title: '1 on 1 Personal Training',
    subheader: 'Most popular',
    price: '15',
    description: [
      '1. Full 1 on 1 Access',
      '2. Nutrition',
      '3. 24/7 Concierge',
      '4. Meditation/Mental Training',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
    href: "/personalTraining"
  },
  {
    title: 'Nutrition',   
    description: [
      '1. Full Custom Plan',
      '2. Detailed For The Client',      
      '3. Help/advice at any time',
      '4. Weekly Accountability Check-Ins',
      '4. Blood work driven',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Mobility',
    price: '30',
    description: [
      '1. Work On Flexibility',
      '2. Feel Better Again',
      '3. Lower Stress',
      '4. Improve Mood',
      '5. Prevent Injury',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
];

const styles = {
  card: {
    width: "285px",
    "&:hover" : {
      backgroundColor: "grey"
    }
  }
}


function PricingContent() {
  return (
    <React.Fragment>
      <div style={{ background: "black"}}>
      <Container disableGutters maxWidth="sm" component="main" sx={{background: "black", pt: 8, pb: 6 }}>
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
        <Grid container spacing={6}>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}  
              style={{margin: "0px auto"}}           
            >
              <Card 
              style={styles.card}
              sx={{backgroundColor: "black", color: "purple", boxShadow: "1px 2px 28px whitesmoke"}}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === '1 on 1 Personal Training' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: "black",
                    borderBottom: "1px solid purple"
                      
                  }}
                />
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
      </div>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
