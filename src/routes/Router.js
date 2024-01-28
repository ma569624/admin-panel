import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import From from '../component/homeform/From'

const Router = () => {
  return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<h2>about</h2>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/form/:id' element={<From />} />
        </Routes>
  )
}

export default Router
