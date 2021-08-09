// import React, { useEffect, useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Button } from "react-bootstrap";

// function DeleteFromCart(props){
//     console.log(props.user)   // test
//     console.log(props.user.id)   // test
//     console.log(props.loggedIn);
//     const [redirect, setRedirect] = useState(false);
    
// useEffect(() => {
//     // props.getCartById(props.user);
// }, [props.cartById]);

//     let handleSubmit = () => {
//         setRedirect(true);
//         props.getCartById(props.user.id)
//     }
    
//     return(
//         <td>
//             {!redirect ? 
//             <Button variant="outline-danger" type="button" onClick={() =>
//                 (props.deleteFromCart(props.user.id), handleSubmit())}> Delete </Button>
//             : <Redirect to='/cart'/>}
//         </td>
//     )
// }

// export default DeleteFromCart;