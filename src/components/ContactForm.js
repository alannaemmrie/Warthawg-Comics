import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
    emailjs.init("user_mrzr3cu8mqzWxg7oCUIMb");

    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            emailjs.sendForm('contact_service', 'contact_form', this)
                .then(response => {
                    if(response.status == 200){
                        console.log("success")
                        alert("Your email was sent!")
                    }
                    else{
                        console.log('error')
                        alert("Sorry, your email could not be sent! Please try again later or email me directly.")
                    }
                })
        });
        console.log("here");
    }

    return(
        <div class="form-wrapper">

            <form className = "contact-form" id="contact-form">                
               <div class="contact-item" id = "item-1">
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder = "Your name here..."/>
               </div>
                
                <div class="contact-item" id = "item-2">
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder = "Your email here..."/>
                </div>
                
               <div class="contact-item" id = "item-3">
                    <label>Message</label>
                    <textarea name="message" placeholder = "Your message here..."></textarea>
               </div>
                
                <input className = "send-btn" id = "item-4" type="submit" value="Send"/>
            </form>

        </div>

    );
}

export default ContactForm;