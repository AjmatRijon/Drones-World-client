import React from "react";
import { CircularProgress, Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Item from "../Home/Item";
import useAuth from "../../hooks/useAuth";
import { Box } from "@mui/system";
import Footer from "../Footer/Footer";

const AllDrones = () => {
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
      
    <>
    <Container>
    
      <Grid container spacing={2}>
        {drones.map((drone) => (
          <Item key={drones._id} drone={drone}></Item>
        ))}
      </Grid>
    </Container>
    <Footer></Footer>
    </>
  );
};

export default AllDrones;
