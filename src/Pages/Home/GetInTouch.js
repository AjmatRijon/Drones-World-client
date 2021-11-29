import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";

const GetInTouch = () => {
  return (
    <Container>
      <Grid id="contact" container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ height: "350px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 24, my: 4 }}
                color="text.primary"
                gutterBottom
              >
                We Are Avaiable 24x7
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                <LocalPhoneIcon /> +55248-970-3543
              </Typography>
              <Typography
                sx={{ my: 4 }}
                variant="h5"
                color="text.secondary"
                component="div"
              >
                <EmailIcon /> Admin@admin.com
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                <BusinessIcon /> 3904 Summit ,Park Avenue ,Southfield
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ py: 4, p: 3, height: "300px" }}>
            <form>
              <TextField
                sx={{ width: "100%", my: 1 }}
                id="outlined-size-small"
                name="name"
                label="Name"
                required
                //   onBlur={handleOnBlur}
                placeholder="Name"
                size="small"
              />
              <TextField
                sx={{ width: "100%", my: 1 }}
                id="outlined-size-small"
                name="email"
                label="Email"
                required
                //   onBlur={handleOnBlur}
                placeholder="Email"
                size="small"
              />
              <TextField
                sx={{ width: "100%",my:1}}
                id="outlined-textarea"
                label="Your Message"
                name="info"
                required
                rows={4}
                multiline
                //   onBlur={}
                placeholder="Your Message"
                size="multiline"
              />
              <Button sx={{ width: "100%",bgcolor: 'text.primary' ,":hover":{backgroundColor:"white",color:"black"} }} type="submit" variant="contained">
                Submit
              </Button>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GetInTouch;
