import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Portfolio/Home'
import About from './Portfolio/About'
import Skills from './Portfolio/Skills'
import Contact from './Portfolio/Contact'
import './Global.css'


const App = () => {

    // http://localhost:3000/
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App