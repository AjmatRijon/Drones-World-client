import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import GoogleIcon from '@mui/icons-material/Google';
import { Box } from "@mui/system";
import FacebookIcon from '@mui/icons-material/Facebook';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "100%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "100%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
            />

            <Button
              sx={{
                width: "100%",
                m: 1,
                bgcolor: "text.primary",
                ":hover": { backgroundColor: "white", color: "black" },
              }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>
            {isLoading && (
              <Box style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <CircularProgress color="error" /></Box>
            )}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <Divider sx={{ my: 3 }} />
          <Box style={{display:"flex",justifyContent:"center"}}>
          <Button
            onClick={handleGoogleSignIn}
            variant="contained"
            sx={{
                mr:1,
              bgcolor: "text.primary",
              ":hover": { backgroundColor: "white", color: "black" },
            }}
          >
            <GoogleIcon/>
          </Button>
          <Button
            // onClick={}
            variant="contained"
            sx={{
              bgcolor: "text.primary",
              ":hover": { backgroundColor: "white", color: "black" },
            }}
          >
            <FacebookIcon/>
          </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%" }}
            src={
              "https://images.unsplash.com/photo-1636971828014-0f3493cba88a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            }
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
