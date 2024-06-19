// import React from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import DashBoard from './componants/DashBoard'
// import './App.css'
// import FillForm from './componants/FillForm/FillForm'
// import Login from './componants/Login/Login'
// import Register from './componants/Register/Register'
// import FillFormResult from './componants/search/SearchFormResult'
// import ForgetPassword from './componants/Password/ForgetPassword'
// import ResetPassword from './componants/Password/ResetPassword'


// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' Component={DashBoard} />
//       <Route path='/fillform' Component={FillForm} />
//       <Route path='/login' Component={Login } />
//       <Route path='/register' Component={Register} />
//       <Route path='/result' Component={FillFormResult} />
//       <Route path='/forget-password' Component={ForgetPassword} />
//       <Route path='/resetPassword/:id/:token' Component={ResetPassword} />
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashBoard from './componants/DashBoard';
import FillForm from './componants/FillForm/FillForm';
import Login from './componants/Login/Login';
import Register from './componants/Register/Register';
import FillFormResult from './componants/search/SearchFormResult';
import ForgetPassword from './componants/Password/ForgetPassword';
import ResetPassword from './componants/Password/ResetPassword';
// import Navbar from './componants/Navbar';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/fillform' element={<ProtectedRoute><FillForm /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/result' element={<ProtectedRoute><FillFormResult /></ProtectedRoute>} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/resetPassword/:id/:token' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
