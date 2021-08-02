import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from "react-bootstrap";

function DeleteFromCart(props){
    // console.log(props)   // test
    const [redirect, setRedirect] = useState(false);
    
    let handleSubmit = () => {
        setRedirect(true);
    }
    
    return(
        <td>
            {!redirect ? 
            <Button variant="outline-danger" type="button" onClick={() =>
                (props.deleteFromCart(props.currentUser), handleSubmit())}> Delete </Button>
            : <Redirect to='/'/>}
        </td>
    )
}

export default DeleteFromCart;