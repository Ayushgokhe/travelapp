// src/Register.js
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import axios from 'axios';
import { useParams } from "react-router-dom";


const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const {id, token} = useParams()


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/;
        return regex.test(password);
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!validatePassword(password)) {
            setPasswordError(' least one uppercase letter, one lowercase letter, and one special character');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            valid = false;
        } else {
            setConfirmPasswordError('');
        }

        axios
      .post(`http://localhost:4000/api/v1/user/resetPassword/${id}/${token}`, { password })
      .then((result) => {
        console.log(result);
        // if (result.data === "Success") {
        //   navigate("/login");
        // }
      })
      .catch((err) => console.log(err));

        if (valid) {
            console.log('Password:', password);

            setPassword('');
            setConfirmPassword('');

            // navigate('/');
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Reset Password</h2>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="eye-button"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    {passwordError && <div className="error-message">{passwordError}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <div className="password-container">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="eye-button"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            {showConfirmPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default ResetPassword;
