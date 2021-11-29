import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Button, TextField, Typography } from '@mui/material';

const AddReview = () => {
  const [star, setStar] = useState('');
  const[rating,setRating]=useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...rating, };
    newInfo[field] = value;
    setRating(newInfo);
  };
  const handleRating = (e) => {
    // collect data
    const ratings = {
      ...rating,
      starNumber : star
    };
    // console.log(star);
    fetch("https://pacific-mountain-74572.herokuapp.com/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(ratings),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // setBookingSuccess(true);
            alert("Review Added");
          
          }
        });
  
      e.preventDefault();
    };
  return (
      <Box>
        <Typography variant="h4" sx={{textAlign:"center"}}> Leave us a Review </Typography>

        <form onSubmit={handleRating}>
            <Rating
          name="simple-controlled"
          value={star}
          onChange={(event, newValue) => {
              setStar(newValue);
            }}
        />
            <TextField
              sx={{ width: "100%", my: 1 }}
              id="outlined-size-small"
              name="name"
              label="Name"
              required
              onBlur={handleOnBlur}
              placeholder="Name"
              size="small"
            />
            <TextField
              sx={{ width: "100%", my: 1 }}
              id="outlined-textarea"
              label="Review Text"
              name="info"
              required
              rows={4}
              multiline
              onBlur={handleOnBlur}
            placeholder="Review Text"
              size="multiline"
            />
             <Button sx={{bgcolor: 'text.primary',":hover":{backgroundColor:"white",color:"black"} }} type="submit" variant="contained">
              Submit
            </Button>
            </form>
      </Box>
  );
};

export default AddReview;
