import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ drone }) => {
  const { img, name, info, price, _id } = drone;
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: "480px" }}>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            ${price}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.slice(0, 140)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Link style={{ textDecoration: "none" }} to={`/all/checkout/${_id}`}>
            <Button
              variant="contained"
              style={{ textDecoration: "none" }}
              sx={{ bgcolor: "text.primary" ,":hover":{backgroundColor:"white",color:"black"}}}
              size="medium"
              
            >
              Buy Now
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
