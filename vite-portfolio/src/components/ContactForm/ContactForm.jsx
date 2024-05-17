import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.scss';
function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false); // New state for confirmation message

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        emailjs.sendForm('service_36me50i', 'template_stciewq', e.target, 'UUxzVtHrNyMGHritm')
            .then((result) => {
                console.log(result.text);
                setName('');
                setEmail('');
                setMessage('');
                setShowConfirmation(true); // Show confirmation message
                setTimeout(() => setShowConfirmation(false), 3000); // Hide confirmation message after 3 seconds
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-form" id="contact">
            <form className="contact-form__form" onSubmit={handleSubmit}>
                <h2 className="contact-form__title">Contact Me</h2>
                <div className="contact-form__input-wrapper">
                    <div className="contact-form__label-wrapper">
                        <label className="contact-form__label" htmlFor="name">Name:</label>
                        <input
                            className="contact-form__input"
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="contact-form__label-wrapper">
                        <label className="contact-form__label" htmlFor="email">Email:</label>
                        <input
                            className="contact-form__input"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <label className="contact-form__label" htmlFor="message">Message:</label>
                <textarea
                    className="contact-form__textarea"
                    id="message"
                    name="message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button className="contact-form__button" type="submit">Submit</button>
                <div className={`contact-form__confirmation ${showConfirmation ? 'visible' : ''}`}>Form submitted successfully!</div>
            </form>
        </div>
    );
}

export default ContactForm;
