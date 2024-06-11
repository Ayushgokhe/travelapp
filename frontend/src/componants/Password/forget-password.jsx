import React, { useState } from 'react';
import './forget-password.css';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically handle the password reset request, e.g., by making an API call.
        setMessage(`Password reset email sent to: ${email}`);
        setTimeout(() => {
            setMessage('')
            setEmail('');
        }, 2000);
        // Hide message after 5 seconds
    };



    return (
        <div className="forget-password-container">
            {message && <div className="message">{message}</div>}
            <form onSubmit={handleSubmit} className="forget-password-form">
                <h2>Forgot Password</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default ForgetPassword;
