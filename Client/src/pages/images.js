import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageOne from "../Assets/diet1.jpg";
import ImageTwo from "../Assets/fitness.jpg";
import ImageThree from "../Assets/fitness1.jpg";
import ImageFour from "../Assets/fitness2.jpg";
import ImageFive from "../Assets/fitness3.jpg";
import ImageSix from "../Assets/fitness4.jpg";
import ImageSeven from "../Assets/Gym1.png";
import ImageEight from "../Assets/regan1.jpeg";
import ImageNine from "../Assets/regan2.jpeg";
import ImageTen from "../Assets/trx.jpg";



export default function MasonryImageList() {
  return (
    <Box sx={{margin: "0px auto", backgroundColor: "black", width: "93%",  overflowY: 'auto', marginTop: "5%"}}>
      <ImageList variant="masonry" cols={1} gap={20}>
        {itemData.map((item) => (
          <ImageListItem style={{width: "80%", margin: "0px auto", color: "white", textAlign: "center"}} key={item.img}>
            <h4>{item.info}</h4>
            <img
              src={item.img}
              //srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{border: "5px solid white"}}
              
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: ImageOne,
    title: 'Bed',
    info: "Personalized Nutrition Plan"
  },
  {
    img: ImageTwo,
    title: 'Books',
    info: "Functional Fitness"
  },

  {
    img: ImageFour,
    title: 'Kitchen',
    info: "Strength Training"
  },
  {
    img: ImageFive,
    title: 'Blinds',
    info: "Group Training"
  },
  {
    img: ImageSix,
    title: 'Chairs',
    info: "Olympic Weightlifting"
  },
  {
    img: ImageSeven,
    title: 'Laptop',
    info: "The Garage Gym"
  },
  {
    img: ImageTen,
    title: 'Storage',
    info: "TRX"
  },
  {
    img: ImageEight,
    title: 'Doors',
    info: "Your Coach"
  },
  {
    img: ImageNine,
    title: 'Coffee'
  
  }

];
