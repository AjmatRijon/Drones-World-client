import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllDrones from './Pages/AllDrones/AllDrones';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard';
import CheckOut from './Pages/Purchase/CheckOut';
import Navigation from './Pages/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
   <Router>
     <Navigation/>
        <Switch>
          <Route  exact path="/home">
          <Home/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/all">
            <AllDrones />
          </Route>
          <PrivateRoute exact path="/all/checkout/:id">
              <CheckOut></CheckOut>
            </PrivateRoute>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <PrivateRoute  path="/dashboard">
            <DashBoard/>
          </PrivateRoute>
        </Switch>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
