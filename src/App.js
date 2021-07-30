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
import ReviewForm from './components/Reviews/reviewForm';

function App() {

  const [token, setToken] = useState([]);  // getToken()
  const [user, setUser] = useState([]);  // getToken()
  const [registeredUser, setRegisteredUser] = useState([]);  // registerUser()
  const [currentUser, setCurrentUser] = useState([]);
  const [allUsers, setAllUsers] = useState([]);  // getAllUsers()
  
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState([]);
  const [memberships, setMemberships] = useState([]);
  const [newMembership, setNewMembership] = useState([]);
  const [cartById, setCartById] = useState([]);
  const [newCart, setNewCart] = useState([]);
  
  useEffect(() => {
    getAllUsers();
    getToken();
    getCurrentUser();
    getAllServices();  // remove
    getAllReviews();  // remove
    getAllMemberships();  // remove
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
        console.log(user); // test
      }
    }

    let registerUser = async (user) => {
      try{
        let response = await axios.post('http://127.0.0.1:8000/users/', user);
        console.log(response.data)  // test
        setRegisteredUser(response.data)
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
        console.log(response.data)  // test
        setCurrentUser(response.data)
      }
      catch(err) {
        console.log(err);
      }
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

    let logoutUser = () =>{
      localStorage.removeItem('token');
      setUser(null);
    }

// SERVICES API CALLS/FUNCTIONS
  
  let getAllServices = async () => {
    try{
      let response = await axios.get('http://127.0.0.1:8000/services/');
      console.log(response.data)  // test
      setServices(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

// REVIEWS API CALLS/FUNCTIONS
  
  let getAllReviews = async () => {
    try{
      let response = await axios.get('http://127.0.0.1:8000/reviews/');
      console.log(response.data)  // test
      setReviews(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

//   let createReview = async () => {
//     try{
//     const jwt = localStorage.getItem('token');
//     console.log(jwt);
//     let response = await axios.post('http://127.0.0.1:8000/reviews/', newReview, {headers: {Authorization: 'Token ' + jwt}});
//     console.log(response.data)  // test
//     setNewReview(response.data)
//     }
//     catch(err) {
//     console.log(err);
//     }
//     console.log(newReview);
// }

let createReview = async (user) => {
  try{
    let response = await axios.post('http://127.0.0.1:8000/reviews/', user);
    console.log(response.data)  // test
    setNewReview(response.data)
  }
  catch(err) {
    console.log(err);
  }
}

// MEMBERSHIP API CALLS/FUNCTIONS
  
  let getAllMemberships = async () => {
    try{
      let response = await axios.get('http://127.0.0.1:8000/memberships/');
      console.log(response.data)  // test
      setMemberships(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

  let createMembership = async () => {
    try{
    const jwt = localStorage.getItem('token');
    console.log(jwt);
    let response = await axios.post('http://127.0.0.1:8000/reviews/', newMembership, {headers: {Authorization: 'Token ' + jwt}});
    console.log(response.data)  // test
    setNewMembership(response.data)
    }
    catch(err) {
    console.log(err);
    }
    console.log(newMembership);
}

// CART API CALLS/FUNCTIONS

let getCartById = async (user) => {
  try{
    let response = await axios.get('http://127.0.0.1:8000/carts/');
    console.log(response.data)  // test
    setCartById(response.data)
  }
  catch(err) {
    console.log(err);
  }
}

let createCart = async (user) => {
  try{
    let response = await axios.post('http://127.0.0.1:8000/carts/', user);
    console.log(response.data)  // test
    setNewCart(response.data)
  }
  catch(err) {
    console.log(err);
  }
}

  return (
    <div>  
        <NavBarUser />
        <NavBar />
          <Route path="/register" render={props => <Registration {...props} registerUser={registerUser} allUsers={allUsers}/>} />
          <Route path="/login" render={props => <Login {...props}  loginUser={loginUser} />} />
          <Route path="/profile" render={props => <Profile {...props} currentUser={currentUser} />} />
          <Route path="/cart" component={Cart} />
          <Button variant="outline-primary" className="logout" onClick={() => logoutUser()}>Logout</Button>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" render={props => <Services {...props} services={services}/>} />
          <Route path="/results" component={Results} />
          <Route path="/reviews" render={props => <Reviews {...props} currentUser={currentUser} reviews={reviews} createReview={createReview} allUsers={allUsers} />} />
          <Route path="/reviewForm" render={props => <ReviewForm {...props} currentUser={currentUser} reviews={reviews} createReview={createReview} />} />
          <Route path="/memberships" render={props => <Memberships {...props} memberships={memberships} createMembership={createMembership}/>}
                 createCart={createCart} />
          <Route path="/book" component={Appointments} />
          <Route path="/contact" component={Contact} />
        </Switch>
    </div>
  );
}

export default App;
