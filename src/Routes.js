import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Booking from "./Pages/Booking/Booking";
import Footer from "./Components/Footer/Footer";
import Agreement from "./Components/Agreement/Agreement";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Booking" component={Booking} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/agreement" component={Agreement} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
