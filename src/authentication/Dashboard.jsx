import React from "react";

import { Link } from "react-router-dom";
import spinner from "../images/loadingSpinner.gif";
import logo from "../images/programming.jpg";


function Dashboard(props){ 
  return(
    <div className="row">
      <div className="col s12 m3 left-panel">
        <h4>Manage Books</h4>
        <div
          to="/add/book"
          className="waves-effect waves-light btn green darken-3 hoverable"
          style={{ margin: "10px 0px" }}
        >
          ADD BOOK <i className="material-icons right">add</i>
        </div>

        <div className="input-field">
          <input
            id="title"
            type="text"
            className="validate"
          />
          <label htmlFor="title">Search by title</label>
        </div>

        <div className="input-field">
          <input
            id="author"
            type="text"
            className="validate"
     
          />
          <label htmlFor="author">Search by author</label>
        </div>
      </div>
      <div className="col s12 m9 right-panel">
              <div className="col s12 m4">
                <div className="card grey lighten-5 z-depth-1 hoverable">
                  <div className="card-image">
                    <img src={logo} style={{ height: "200px" }}/>
                  </div>
                  
                  <div className="card-action center">
                    <div
                      to={`/book/`}
                      className="btn grey darken-1 hoverable"
                    >
                      View Details{" "}
                      <i className="material-icons right">arrow_forward</i>
                    </div>
                  </div>
                </div>
              </div>
              <h3>No books available</h3>
        </div>
        
      </div>
  );
}

export default Dashboard;
