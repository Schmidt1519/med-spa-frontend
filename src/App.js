import React, { useState, useEffect } from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import axios from "axios";
import jwtDecode from "jwt-decode";
import "react-datepicker/dist/react-datepicker.css";

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
import ViewCart from './components/Cart/viewCart';
import ReviewForm from './components/Reviews/reviewForm';

function App() {
  const [token, setToken] = useState([]);  // getToken()
  const [user, setUser] = useState([]);  // getToken()
  const [registeredUser, setRegisteredUser] = useState([]);  // registerUser()
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState([]);
  const [memberships, setMemberships] = useState([]);
  const [MembershipByUserId, setMembershipByUserId] = useState([]);
  const [newCart, setNewCart] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [appointmentByUserId, setAppointmentByUserId] = useState([]);
  const [updateAppointment, setUpdateAppointment] = useState([]);
  const [newKey, setNewKey] = useState([]);  // Stripe
  const [loggedIn, setLoggedIn] = useState(false);
  let cartById;

  useEffect(() => {
    getToken();
    setAppointment();
    getAllServices();
    getAllReviews();
    getAllMemberships();
    getAllAppointments();
    getKey();
  }, []);

// USER API CALLS/FUNCTIONS

  let getToken = () => {
    const jwt = localStorage.getItem('token');
    if(jwt !== null){
      try{
        let user = jwtDecode(jwt);
        setToken(jwt);
        setUser(user);
        console.log("jwt", jwt);  // test
        console.log("user", user); // test
      }
      catch(err) {
        console.log(err);
      }
    }
  }

  let registerUser = async (user) => {
    try{
      let response = await axios.post('http://127.0.0.1:8000/users/', user);
      console.log("register user", response.data)  // test
      setRegisteredUser(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

  let loginUser = async (login) => {
    try{
      let response = await axios.post('http://127.0.0.1:8000/token/login/', login);
      setToken(response.data.auth_token);
      localStorage.setItem('token', response.data.auth_token);
      console.log("login user", response.data);  // test
      getUser(response.data);
      setLoggedIn(true);
    }
    catch(err) {
      console.log(err);
    }
  }

  let getUser = async () => {
    try{
      const jwt = localStorage.getItem('token');
      console.log("get user - jwt", jwt); // test
      let response = await axios.get('http://127.0.0.1:8000/users/me/', {headers: {Authorization: 'Token ' + jwt}});
      console.log("get user", response.data);  // test
      setUser(response.data);
      console.log("get User -- cartById", cartById);  // test
      getMembershipByUserId(response.data.id);
      getAppointmentByUserId(response.data.id);
      getKey();
    }
    catch(err) {
      console.log(err);
    }
  }

  let logoutUser = async () => {
    localStorage.removeItem('token');
    setUser(null);
    setLoggedIn(false);
  }

  let getAllServices = async () => {
    try{
      let response = await axios.get('http://127.0.0.1:8000/services/');
      console.log("get all services", response.data)  // test
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
      console.log("get all reviews", response.data)  // test
      setReviews(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

  let createReview = async (user) => {
    try{
      let response = await axios.post('http://127.0.0.1:8000/reviews/', user);
      console.log("create review", response.data)  // test
      setNewReview(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

// APPOINTMENT API CALLS/FUNCTIONS

let getAllAppointments = async () => {
  try{
    let response = await axios.get('http://127.0.0.1:8000/appointments/');
    console.log("get all appointment", response.data)  // test
    setAppointments(response.data)
  }
  catch(err) {
    console.log(err);
  }
}

let getAppointmentByUserId = async (user) => {
  try{
    let response = await axios.get(`http://127.0.0.1:8000/appointments/user/${user}/`);
    console.log("get appointment by ID", response.data)  // test
    setAppointmentByUserId(response.data)
  }
  catch(err) {
    console.log(err);
  }
}

let setAppointment = async (id, appointment) => {
  try{
    let response = await axios.put(`http://127.0.0.1:8000/appointments/${id}/`, appointment);
    console.log("get appointment by ID", response.data)  // test
    setUpdateAppointment(response.data)
  }
  catch(err) {
    console.log(err);
  }
}

// MEMBERSHIP API CALLS/FUNCTIONS
  
  let getAllMemberships = async () => {
    try{
      let response = await axios.get('http://127.0.0.1:8000/memberships/');
      console.log("get all memberships", response.data)  // test
      setMemberships(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

  let getMembershipByUserId = async (user) => {
    try{
      let response = await axios.get(`http://127.0.0.1:8000/memberships/user/${user}/`);
      console.log("get membership by ID", response.data)  // test
      setMembershipByUserId(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

// CART API CALLS/FUNCTIONS

  let getCartById = async (user) => {
    try{
      console.log("getCartById -- user", user); // test
      let response = await axios.get(`http://127.0.0.1:8000/carts/${user}/`);
      console.log("get cart by ID", response.data)  // test
      // setCartById(response.data)
      cartById = response.data;
    }
    catch(err) {
      console.log(err);
    }
  }

  let createCart = async (cart) => {
    try{
      let response = await axios.post('http://127.0.0.1:8000/carts/', cart);
      console.log("create cart", response.data)  // test
      setNewCart(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

  let deleteFromCart = async (id) => {
    try{
      await axios.delete(`http://127.0.0.1:8000/carts/${id}/`)
      console.log("deleted"); // test
    }
    catch(err) {
      console.log(err);
    }
  }

  let getKey = async () => {
    try{
      let response = await axios.get('http://127.0.0.1:8000/config/');
      console.log("get key", response.data)  // test
      setNewKey(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="outer-div">
      <div>
        <NavBarUser user={user} loggedIn={loggedIn} logoutUser={logoutUser} />
        <NavBar user={user} loggedIn={loggedIn} logoutUser={logoutUser} />
        <Switch>
          <Route path="/register" render={props => <Registration {...props} registerUser={registerUser} />} />
          <Route path="/login" render={props => <Login {...props} user={user} loginUser={loginUser} />} />
          <Route path="/profile" render={props => <Profile {...props} user={user} loggedIn={loggedIn} MembershipByUserId={MembershipByUserId}
                                 getAppointmentByUserId={getAppointmentByUserId} appointmentByUserId={appointmentByUserId} />} />
          <Route path="/cart" render={props => <ViewCart {...props} user={user} loggedIn={loggedIn} getCartById={getCartById}  
                              cartById={cartById} deleteFromCart={deleteFromCart} getMembershipByUserId={getMembershipByUserId} 
                              MembershipByUserId={MembershipByUserId} newKey={newKey} getKey={getKey} />} />
          <Route exact path="/" component={Home} />
          <Route path="/services" render={props => <Services {...props} user={user} loggedIn={loggedIn} services={services} />} />
          <Route path="/results" component={Results} />
          <Route path="/reviews" render={props => <Reviews {...props} user={user} loggedIn={loggedIn}
                                 reviews={reviews} createReview={createReview} getAllReviews={getAllReviews} />} />
          <Route path="/reviewForm" render={props => <ReviewForm {...props} user={user} loggedIn={loggedIn}
                                 reviews={reviews} createReview={createReview} getAllReviews={getAllReviews} />} />
          <Route path="/memberships" render={props => <Memberships {...props} user={user} loggedIn={loggedIn} memberships={memberships}  
                                  createCart={createCart} getCartById={getCartById} cartById={cartById} />} />      
          <Route path="/book" render={props => <Appointments {...props} user={user} loggedIn={loggedIn} appointments={appointments} 
                              setAppointment={setAppointment} getAllAppointments={getAllAppointments} />} />
          <Route path="/contact" render={props => <Contact {...props} user={user} loggedIn={loggedIn} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
