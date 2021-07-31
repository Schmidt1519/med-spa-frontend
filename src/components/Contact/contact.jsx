// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import{ init, sendForm } from 'emailjs-com';
// init("user_c707aMDRdDbJ7gg9r9WrN");

// const Contact = (props) => {
//     console.log("contact-currentUser", props.currentUser);

//     const [contactNumber, setContactNumber] = useState("000000");
        
//     const generateContactNumber = () => {
//       const numStr = "000000" + (Math.random() * 1000000 | 0);
//       setContactNumber(numStr.substring(numStr.length - 6));
//     }

//     const { register, handleSubmit, watch, errors } = useForm();
    
//     const onSubmit = data => {
//         // console.log(data);
//         generateContactNumber();
//         sendForm('contact_form', 'YOUR_TEMPLATE_ID', '#contact-form')
//             .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//             }, function(error) {
//             console.log('FAILED...', error);
//             });
//         }
//     }

//     const message = watch('message') || "";
//     const messageCharsLeft = 1500 - message.length;

//     return (
//         <div className='contact'>
//         <h1>Contact</h1>
//             <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
//             <input type='hidden' name='contact_number' value={contactNumber} />

//             {errors.user_name && errors.user_name.type === "required" && (
//             <div role="alert">Name is required<br/></div>)}

//                 <input {...register('user_name', { required: true })}
//                     type='text'
//                     name='user_name'
//                     placeholder='Name' 
//                     maxLength='30'
//                     aria-invalid={errors.user_name ? "true" : "false"}
//                     ref={register({ required: true })}/>

//                 <br/>
//                 <input {...register('user_email', { required: true })}
//                     type='email'
//                     name='user_email'
//                     placeholder='Email'
//                     maxLength='30'
//                     aria-invalid={errors.user_email ? "true" : "false"}
//                     ref={register({ required: true })}/>

//                 <br/>
//                 <textarea {...register('message', { required: true })}
//                     name='message' 
//                     placeholder='Message'
//                     maxLength='400'
//                     aria-invalid={errors.message ? "true" : "false"}
//                     ref={register({ required: true })}/>
//                 <p className='message-chars-left'>{messageCharsLeft}</p>
//                 <br/>
//                 <input type='submit' value='Send' />
//             </form>
//         </div>
//   );
// }

// export default Contact;




import React from 'react';

function Contact(props) {
    return(
        <div>
            <div>
            <h1>Contact Us</h1>
            <h3>* Front end only *</h3>
            <h3>* Email.js </h3>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Contact;
