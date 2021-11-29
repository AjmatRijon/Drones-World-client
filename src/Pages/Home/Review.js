import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Rating } from '@mui/material';

const Review = ({review}) => {
  const {name,starNumber,info} = review;
    return (
        <Grid item xs={6} md={4} >
        <Card sx={{ maxWidth: "800px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{mb:1}}>
            {info}
          </Typography>
          <Rating name="half-rating-read" defaultValue={starNumber} precision={0.5} readOnly />
        </CardContent>
      </Card>
      </Grid>
    );
};

export default Review;