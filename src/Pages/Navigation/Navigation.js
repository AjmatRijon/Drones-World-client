import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import {NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {logout,user} = useAuth();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center",justifyContent:"end", textAlign: "center" ,height:"60px"}}>
        <Typography sx={{ minWidth: 100 }}>
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/"><Button color="inherit">Home</Button></NavLink>
        </Typography>
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/all">
          <Button color="inherit">Explore</Button>
        </NavLink>
        {user?.email && <NavLink style={{ textDecoration: "none", color: "black" }} to="/dashboard"> <MenuItem>
        <Button color="inherit"> DashBoard</Button>
        </MenuItem>
        </NavLink> }
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
           {user?.email ? <Button variant="outlined" style={{borderColor:"black",color:"black"}}> {user?.displayName}</Button> :
           <Button variant="outlined" ><NavLink style={{ textDecoration: "none", color: "black" }} to="/login"> Log In</NavLink> </Button>
           }
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <MenuItem>
          <Avatar /> Profile
        </MenuItem> */}
      
        <Divider />
       {user?.email &&  <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Button onClick={logout}>
           Log Out </Button>
        </MenuItem>
        }
      </Menu>
    </React.Fragment>
  );
};

export default Navigation;
