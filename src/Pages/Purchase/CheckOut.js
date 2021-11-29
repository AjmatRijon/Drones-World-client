import {
  Button,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const CheckOut = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [drone, setDrone] = useState({});
  const initialInfo = {
    Name: user.displayName,
    email: user.email,
    item_name: drone?.name,
    status : "pending",
    phone: "",
  };
  const [orderInfo, setOrderInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
  };

  useEffect(() => {
    const url = `https://pacific-mountain-74572.herokuapp.com/drones/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDrone(data));
  }, [id]);
  const handleOrder = (e) => {
    // collect data
    const orders = {
      ...orderInfo,
    };
    // send to the server
    fetch("https://pacific-mountain-74572.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // setBookingSuccess(true);
          alert("Order Recived");
        }
      });

    e.preventDefault();
  };
  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card>
            <CardMedia
              component="img"
              height="180"
              image={drone.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                ${drone.price}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {drone.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {drone.info}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
            <Typography variant="h4" component="div"> Fill The Form To Confirm Your Order </Typography>
          <form onSubmit={handleOrder}>
            <TextField
              sx={{ width: "100%", m: 1 }}
              id="outlined-size-small"
              name="Item_Name"
              onBlur={handleOnBlur}
              value={drone?.name}
              defaultValue={drone?.name}
              size="small"
            />
            <TextField
              sx={{ width: "100%", m: 1 }}
              id="outlined-size-small"
              name="Name"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              sx={{ width: "100%", m: 1 }}
              id="outlined-size-small"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              sx={{ width: "100%", m: 1 }}
              id="outlined-size-small"
              name="phone"
              onBlur={handleOnBlur}
              // defaultValue="Phone Number"
              placeholder="Phone Number"
              size="small"
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckOut;
