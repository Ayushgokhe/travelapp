import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DashBoard from './componants/DashBoard'
import './App.css'
import FillForm from './componants/FillForm'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={DashBoard} />
      <Route path='/fillform' Component={FillForm} />
    </Routes>
    </BrowserRouter>
  )
}

export default App