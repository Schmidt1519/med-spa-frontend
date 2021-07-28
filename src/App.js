import React, { useState, useEffect } from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import './App.css';
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Navbar, Button, Nav } from 'react-bootstrap';

import Services from './components/Services/services';
import NavBar from './components/NavBar/navBar';
import Registration from './components/Registration/registration';
import Login from './components/Login/login';


function App() {

  const [token, setToken] = useState([]);  // getToken()
  const [user, setUser] = useState([]);  // getToken()
  const [registeredUser, setRegisteredUser] = useState([]);  // registerUser()
  const [currentUser, setCurrentUser] = useState([]);
  const [allUsers, setAllUsers] = useState([]);  // getAllUsers()
  //const [services, setServices] = useState([]);

  useEffect(() => {
    getAllUsers();
    getToken();
  }, []);

// USER FUNCTIONS
    let getToken = () => {
      const jwt = localStorage.getItem('token');
      if(jwt !== null){
        try{
          let user = jwtDecode(jwt);
          setToken(jwt);
          setUser(user);
        }
        catch(err) {
          console.log(err);
        }
        console.log(jwt);  // test
      }
    }

    let registerUser = async (user) => {
      try{
        let response = await axios.post('http://127.0.0.1:8000/users/', user);
        setRegisteredUser(response.data)
        console.log(response.data)  // test
      }
      catch(err) {
        console.log(err);
      }
    }

    let loginUser = async (login) => {
      try{
        let response = await axios.post('http://127.0.0.1:8000/token/login/', login);
        setToken(response.data.auth_token)
        localStorage.setItem('token', response.data.auth_token)
        console.log(response.data)  // test
      }
      catch(err) {
        console.log(err);
      }
      console.log(token);  // test
    }

    let getCurrentUser = async () => {
      try{
        const jwt = localStorage.getItem('token');
        console.log(jwt);
        let response = await axios.get('http://127.0.0.1:8000/users/me/', {headers: {Authorization: 'Token ' + jwt}});
        setCurrentUser(response.data)
        console.log(response.data)  // test
      }
      catch(err) {
        console.log(err);
      }
      console.log(currentUser);
    }

    let getAllUsers = async () => {
      try{
        let response = await axios.get('http://127.0.0.1:8000/user/');
        console.log(response.data)  // test
        setAllUsers(response.data)
      }
      catch(err) {
        console.log(err);
      }
    }

    let logout = () =>{
      localStorage.removeItem('token');
      setToken(null);
    }

  // SERVICES FUNCTIONS
  // let getAllServices = async () => {
  //   try{
  //     let response = await axios.get('http://127.0.0.1:8000/services/');
  //     console.log(response.data)  // test
  //     setServices(response.data)
  //   }
  //   catch(err) {
  //     console.log(err);
  //   }
  // }


  return (
    <div>
      <h1>Register</h1>
      <Registration registerUser={registerUser} allUsers={allUsers}/>
      <h1>Login</h1>
      <Login loginUser={loginUser}/>
      <Button variant="outline-primary" className="logout" 
              onClick={() => logout()}>Logout</Button>
    </div>
  );
}

export default App;
