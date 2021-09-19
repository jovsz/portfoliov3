  
import React, { useState } from 'react';
import { db } from '../firebase';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('emails')
        .add({
            name: name,
            email: email,
            message: message,
        })
        .then(() =>{
            alert('Message has been submitted');
            
        })
        .catch((err) => {
            alert('Error: ' + err.message);
        });
        setName('');
        setEmail('');
        setMessage('');  
    };

    return (
        <div className=" d-flex justify-content-center align-items-center contact-me wallpaper">
            <form className="card rounded d-flex shadow-sm p-3 mb-5 bg-bod contact" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <p className='fs-2'>Contact Form</p>
                    <labe classname='form-label'>Name:</labe>
                    <input className='form-control' placeholder ='name' value={name} onChange={(e) => {setName(e.target.value)}} />
                </div>
                <div className='mb-3'>
                    <label classname='form-label'>Email:</label>
                    <input className='form-control' type='email' aria-describedby="emailHelp" placeholder ='email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </div>
                <label classname='form-label mb-3'>Message:</label>
                <div className='mb-3 form-floating'>
                    <textarea className='form-control textareaSize' placeholder='message' value={message} onChange={(e) => {setMessage(e.target.value)}}></textarea>
                </div>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Contact;