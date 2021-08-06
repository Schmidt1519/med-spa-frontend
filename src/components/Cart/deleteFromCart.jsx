import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from "react-bootstrap";

function DeleteFromCart(props){
    console.log(props.user)   // test
    console.log(props.user.id)   // test
    const [redirect, setRedirect] = useState(false);
    
    let handleSubmit = () => {
        setRedirect(true);
    }
    
    return(
        <td>
            {!redirect ? 
            <Button variant="outline-danger" type="button" onClick={() =>
                (props.deleteFromCart(props.user), handleSubmit())}> Delete </Button>
            : <Redirect to='/cart'/>}
        </td>
    )
}

export default DeleteFromCart;