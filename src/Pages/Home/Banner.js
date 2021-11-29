import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co/5kqpNCn/photo-1514043454212-14c181f46583-ixlib-rb-1-2.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            height: "100vh",
            color: "white",
            mx: "auto",
            width: "100%",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2">Welcome to drone world</Typography>
          <Box sx={{mt:3}}>
            <NavLink style={{ textDecoration: "none", }} to="/all">
              <Button sx={{mr:2,bgcolor: 'text.primary',":hover":{backgroundColor:"white",color:"black"} }} variant="contained">All Drones</Button>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="#contact">
            <Button sx={{bgcolor: 'white',color:"black",":hover":{backgroundColor:"black",color:"white"} }} variant="outlined">Contact Us</Button>
            </NavLink>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Banner;
