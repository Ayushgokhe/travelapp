import React, { useState } from 'react';
import './forget-password.css';
import axios from 'axios';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically handle the password reset request, e.g., by making an API call.

    axios
      .post("http://localhost:4000/api/v1/user/forgetPassword", { email })
      .then((result) => {
        console.log(result);
        // if (result.data === "Success") {
        //   navigate("/login");
        // }
      })
      .catch((err) => console.log(err));

        setMessage(`Check Email: ${email}`);
        setTimeout(() => {
            setMessage('')
            setEmail('');
        }, 3000);
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
