import React from 'react';

// export default class extends React.Component {
//   constructor(props) {
// 	super(props);
// 	this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
// 	this.handleChange = this.handleChange.bind(this);
// 	this.handleSubmit = this.handleSubmit.bind(this);
//   }

// const EmailForm = (props) => {
//     const [feedback, setFeedback] = useState('');
//     const [name, setName] = useState('Name');
//     const [email, setEmail] = useState('email@example.com');

//     const handleChange = (event) => {
//         event.persist();
//         setFeedback => ({feedback: event.target.value})
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const templateId = 'template_id';

//         sendFeedback(templateId, {message_html: feedback, from_name: name, reply_to: email})
//       };

//       sendFeedback (templateId, variables) {
//         window.emailjs.send(
//           'gmail', templateId,
//           variables
//           ).then(res => {
//             console.log('Email successfully sent!')
//           })
//           // Handle errors here however you like, or use a React error boundary
//           .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
//       }
//     }

//     return (
//     <form className="test-mailing">
//         <h1>Let's see if it works</h1>
//         <div>
//         <textarea
//             id="test-mailing"
//             name="test-mailing"
//             onChange={this.handleChange}
//             placeholder="Post some lorem ipsum here"
//             required
//             value={this.state.feedback}
//             style={{width: '100%', height: '150px'}}
//         />
//         </div>
//         <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
//     </form>
//     );
// }