import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import { AuthProvider } from "./context/Auth";

import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import Footer from "./components/Footer";
import home from "./components/home";
import userlogin from "./components/userlogin";
import Signup from "./components/signup";
import Viewbook from "./components/viewbook"

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Switch>
          <Fragment>
            <div className="content">
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/userlogin" component={userlogin} />
              <Route exact path="/books" component={Dashboard} />
              <Route exact path="/book/:id" component={BookDetails} />
              <Route exact path="/add/book" component={AddBook} />
              <Route exact path="/viewbook" component={Viewbook} />
            </div>
          </Fragment>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
