import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddDrone = () => {
    const[drone,setDrone]=useState({});
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...drone };
        newInfo[field] = value;
        setDrone(newInfo);
      };
    
    const handleDrone = (e) => {
        // collect data
        const drones = {
          ...drone,
        };
        // send to the server
        fetch("https://pacific-mountain-74572.herokuapp.com/drones", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(drones),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              // setBookingSuccess(true);
              alert("Drone Added");
            
            }
          });
    
        e.preventDefault();
      };
    return (
        <div>
            <Typography variant="h4" sx={{textAlign:"center"}}> Add More Drones</Typography>
           <form onSubmit={handleDrone}>
            <TextField
              sx={{ width: "100%", my: 1 }}
              id="outlined-size-small"
              name="name"
              required
              onBlur={handleOnBlur}
              placeholder="Name Of Drone"
              label="Name Of Drone"
              size="small"
            />
            <TextField
              sx={{ width: "100%", my: 1 }}
              id="outlined-multiline-small"
              name="info"
              multiline
              rows={5}
              required
              onBlur={handleOnBlur}
            placeholder="Information"
            label="Information"
              // size="small"
            />
              <TextField
                sx={{ width: "100%", my: 1 }}
                id="outlined-size-small"
                name="img"
                required
                onBlur={handleOnBlur}
                placeholder="Image Link"
                label="Image Link"
                size="small"
              />
            <TextField
              sx={{ width: "100%", my: 1 }}
              id="outlined-size-small"
              name="price"
              required
              onBlur={handleOnBlur}
              placeholder="Price"
              label="Price"
              size="small"
            />
            <Button sx={{bgcolor: 'text.primary',":hover":{backgroundColor:"white",color:"black"} }}type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </div>
    );
};

export default AddDrone;