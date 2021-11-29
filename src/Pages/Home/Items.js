import React from "react";
import {CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Item from "./Item";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";


const Items = () => {
  const [drones, setDrones] = useState([]);
  const {isLoading} = useAuth();
  useEffect(() => {
    fetch("https://pacific-mountain-74572.herokuapp.com/drones")
      .then((res) => res.json())
      .then((data) => setDrones(data));
  }, []);
  if(isLoading){
    return<Box style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <CircularProgress color="error" /></Box>
  }
  return (
    <Container>
      <Typography variant="h3" sx={{textAlign:"center",my:5}}>Best Products</Typography>
      <Grid container spacing={2}>
        {drones.slice(0, 6).map((drone) => (
          <Item key={drone._id} drone={drone}></Item>
        ))}
      </Grid>
    </Container>
  );
};

export default Items;
