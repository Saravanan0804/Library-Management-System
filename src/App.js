import { useEffect, useState } from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import NavBar from './layouts/NavBar';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import Footer from "./layouts/Footer";
import Dashboard from "./authentication/Dashboard";

function App() {
  const [user, setUser] = useState('');
  const [toggleForm, setToggleForm] =  useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  const userState = () => {
    const data = localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  }

  useEffect(() => {
    userState();
  }, []);
  return (
    <>
      {user !== null ? (
        <>
        <NavBar setUserState={() => setUser(null)}/>
        <Dashboard />
        <Footer />
        </>
      ) : (
         <>
         {toggleForm ? (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>) 
         : ( <SignUp toggle={() => formMode()}/>)}
        
     </>
      )} 
    </>
   
  );
}

export default App;
