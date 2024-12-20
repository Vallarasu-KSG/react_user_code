import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/1.Home/Home'
import Invoice from './Pages/2.Invoice/Invoice'
import Details from './Pages/3.Details/Details'
import Course from './Pages/5.Course/Course'
import About from './Pages/4.About/About'
import { GlobalProvider } from './Context/GlobalState'
const App = () => {

  return (
    <div className="nav-dis-container">
        <GlobalProvider>
         <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/Invoice' element={<Invoice/>}></Route>
            <Route path='/Details' element={<Details/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Course' element={<Course/>}></Route>
          </Routes>
          </BrowserRouter>
        </GlobalProvider>
    </div>
  )
}

export default App