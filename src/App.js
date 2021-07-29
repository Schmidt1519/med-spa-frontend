import React, { useState, useEffect } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Button } from 'react-bootstrap';

import NavBar from './components/NavBar/navBar';
import NavBarUser from './components/NavBar/navBarUser';
import Registration from './components/Registration/registration';
import Login from './components/Login/login';
import Home from './components/Home/home';
import Services from './components/Services/services';
import Results from './components/Results/results';
import Reviews from './components/Reviews/reviews';
import Memberships from './components/Memberships/memberships';
import Appointments from './components/Appointments/appointments';
import Contact from './components/Contact/contact';
import Profile from './components/Profile/profile';
import Cart from './components/Cart/cart';

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
      setUser(null);
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
      <div className="NavBarUser">
        <NavBarUser />
        <Switch>
            <Route path="/register" render={props => <Registration {...props} registerUser={registerUser} allUsers={allUsers}/>} />
            <Route path="/login" render={props => <Login {...props}  loginUser={loginUser}/>} />
            <Route path="/profile" component={Profile} />
            <Route path="/cart" component={Cart} />
            <Button variant="outline-primary" className="logout" onClick={() => logout()}>Logout</Button>
      
        </Switch>
      </div>
          <div className="NavBar">
          <NavBar />
          </div>
            <Route path="/home" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/results" component={Results} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/memberships" component={Memberships} />
            <Route path="/book" component={Appointments} />
            <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
