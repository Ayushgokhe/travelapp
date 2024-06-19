// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';
// import axios from 'axios';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     let navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle login logic here

//         axios
//             .post("http://localhost:4000/api/v1/user/login", { email, password })
//             .then((result) => {
//                 console.log('result..', result);
//                 localStorage.setItem('token', result.data.token)
//                 if (result.statusText === "OK") {
//                     navigate("/");
//                 }
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setErrorMessage('Wrong credentials');
//             });
//     };

//     return (
//         <div className="login-container">
//             <form onSubmit={handleSubmit} className="login-form">
//                 <h2>Login</h2>
                
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="login-button">Login</button>
//                 {errorMessage && <div className="error-message">{errorMessage}</div>}
//                 <div className="register-link">
//                     <span style={{marginRight:'10px'}}>Not registered? <Link to="/register">Register here</Link></span>
//                     <span><Link to="/forget-password">Forgot Password?</Link></span>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here

    axios
      .post("http://localhost:4000/api/v1/user/login", { email, password })
      .then((result) => {
        console.log('result..', result);
        localStorage.setItem('token', result.data.token)
        if (result.statusText === "OK") {
          navigate("/"); // Redirect to SearchForm component
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Wrong credentials');
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="register-link">
          <span style={{marginRight:'10px'}}>Not registered? <Link to="/register">Register here</Link></span>
          <span><Link to="/forget-password">Forgot Password?</Link></span>
        </div>
      </form>
    </div>
  );
};

export default Login;