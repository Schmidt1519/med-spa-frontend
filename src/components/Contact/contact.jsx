import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';
import { init, sendForm } from 'emailjs-com';
init("user_c707aMDRdDbJ7gg9r9WrN");

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    toast.configure()
    const notifySuccess = () => toast("Message Sent!",
    {position: toast.POSITION.TOP_CENTER});

    const notifyFail = () => toast("Message Not Sent.",
    {position: toast.POSITION.TOP_CENTER});

    const onSubmit = (data) => {
        console.log(data);
        const form = document.querySelector('#contact-form');

        sendForm('contact_service', 'contact_form', '#contact-form')
        .then(function(response) {
            console.log("Success!", response.status, response.text);
            form.reset();
            notifySuccess();
        }, function(error) {
            console.log("Failed...", error);
            notifyFail();
        });
    }

    return (
      <div className='contact'>
        <Container>
        <h1 className="contact">Contact Us</h1>
            <Form className="w-50" id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                {errors.user_name && errors.user_name.type === "required" && (
                    <div role="alert">Name is required<br/></div>
                    )}
                <Form.Control 
                type='text'
                name='user_name'
                placeholder='Name'
                aria-invalid={errors.user_name ? "true" : "false"}
                {...register('user_name', { required: true, maxLength: 30 })} />              
      
                {errors.user_email && errors.user_email.type === "required" && (
                    <div role="alert">Email is required<br/></div>
                    )}
                <Form.Control
                type='email'
                name='user_email'
                placeholder='Email'
                aria-invalid={errors.user_email ? "true" : "false"}
                {...register('user_email', { required: true, maxLength: 50 })} />

                {errors.message && errors.message.type === "required" && (
                    <div role="alert">Message is required<br/></div>
                    )}
                <Form.Control as="textarea" rows={3}
                name='message' 
                placeholder='Message'
                aria-invalid={errors.message ? "true" : "false"}
                {...register('message', { required: true, maxLength: 1000 })} />

                <Form.Group className="mb-3" controlId="formBasicButton">
                <Button type='submit' value='Send'>Send</Button>
                </Form.Group>
            </Form>
            </Container>
      </div>
    );
  }

export default Contact;
