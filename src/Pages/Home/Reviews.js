import {CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Box } from "@mui/system";
import useAuth from '../../hooks/useAuth';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {isLoading} = useAuth();
  useEffect(() => {
    fetch("https://pacific-mountain-74572.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  if(isLoading){
    return<Box style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <CircularProgress color="error" /></Box>
  }
    return (
        <Container>
            <Typography variant="h3" sx={{textAlign:"center",my:5}}>Our clinets Reviews</Typography>
        <Grid container spacing={2}>
         {
            reviews.map((review)=> <Review
            key={review._id}
            review={review}
            ></Review>)
         }
         </Grid>
      
      </Container>
    );
};

export default Reviews;