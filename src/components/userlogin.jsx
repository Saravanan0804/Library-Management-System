import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebaseConfig";
import M from "materialize-css/dist/js/materialize.min.js";
import { AuthContext } from "../context/Auth";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Userlogin = props => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      props.history.push("/viewbook");
    }
  }, [user, props.history]);

  const login = async e => {
    e.preventDefault();
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (user) {
        props.history.push("/viewbook");
      }
    } catch (error) {
      M.toast({ html: `${error.message}`, classes: "red rounded" });
    }
  };
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card hoverable">
          <div className="card-content">
            <h5 className="center">Login to Dashboard</h5>
            <form onSubmit={login}>
              <div className="row">
                <div className="input-field col s12 m8 offset-m2">
                
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s12 m8 offset-m2">
                  
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="card-action center">
                <button
                  className="waves-effect waves-light btn green"
                  style={{ margin: "18px" }}
                  type="submit"
                >
                  Login
                  
                </button>
                <button
                  className="waves-effect waves-light btn red"
                  type="reset"
                  onClick={() => {
                    setEmail("");
                    setPassword("");
                  }}
                >
                  Reset 
                </button>
                
               
              </div>
            </form>
            <div className="card-action center">
            <Button href="Signup" variant="danger" >
                    Signup
            </Button>{' '}
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
