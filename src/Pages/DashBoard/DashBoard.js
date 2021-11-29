import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PaymentIcon from '@mui/icons-material/Payment';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch, NavLink } from "react-router-dom";
import { MenuItem } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../../Pages/Login/AdminRoute/AdminRoute";
import Logout from "@mui/icons-material/Logout";
import MakeAdmin from "./MakeAdmin";
import AddDrone from "./AddDrone";
import MyOrders from "./MyOrders";
import AddReview from "./AddReview"
import AllOrder from "./AllOrder";
import ManageDrones from "./ManageDrones";

const drawerWidth = 200;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <MenuItem>
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            Home
          </MenuItem>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={`${url}/orders`}>
          <MenuItem>
            <ListItemIcon>
              <LocalMallIcon fontSize="small" />
            </ListItemIcon>
            My Orders
          </MenuItem>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={`${url}/payment`}>
          <MenuItem>
            <ListItemIcon>
              <PaymentIcon fontSize="small" />
            </ListItemIcon>
            Payment
          </MenuItem>
        </Link>
        <NavLink activeClassName="active" style={{ textDecoration: "none", color: "black" }} to={`${url}/review`}>
          <MenuItem>
            <ListItemIcon>
              <ReviewsIcon fontSize="small" />
            </ListItemIcon>
            Review
          </MenuItem>
        </NavLink>
        {admin && (
          <Box>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`${url}/makeadmin`}
            >
              <MenuItem>
                <ListItemIcon>
                  <PersonAddIcon fontSize="small" />
                </ListItemIcon>
                Make Admin
              </MenuItem>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`${url}/addDrone`}
            >
              <MenuItem>
                <ListItemIcon>
                  <ControlPointIcon fontSize="small" />
                </ListItemIcon>
                Add Drone
              </MenuItem>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`${url}/manageorder`}
            >
              <MenuItem>
                <ListItemIcon>
                  <LocalMallIcon fontSize="small" />
                </ListItemIcon>
                Manage All Order
              </MenuItem>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`${url}/managedrones`}
            >
              <MenuItem>
                <ListItemIcon>
                  <AppRegistrationIcon fontSize="small" />
                </ListItemIcon>
                Manage All Drones
              </MenuItem>
            </Link>
          </Box>
        )}
            <MenuItem onClick={logout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Log Out
            </MenuItem>

      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'black' ,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Account Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <h2>Welcome to Website DashBoard</h2>
          </Route>
          <Route exact path={`${path}/orders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/payment`}>
            <h1>Payment system coming soon</h1>
          </Route>
          <Route exact path={`${path}/review`}>
            <AddReview></AddReview>
          </Route>
          <AdminRoute exact path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addDrone`}>
           <AddDrone></AddDrone>
          </AdminRoute>
          <AdminRoute path={`${path}/manageorder`}>
          <AllOrder></AllOrder>
          </AdminRoute>
          <AdminRoute path={`${path}/managedrones`}>
         <ManageDrones></ManageDrones>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
