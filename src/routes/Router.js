import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import From from '../component/homeform/From'
import EditForm from '../component/homeform/EditForm'
import NewTest from '../component/homeform/NewTest'

const Router = () => {
  return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<h2>about</h2>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/form' element={<From />} />
            <Route path='/form/:id' element={<EditForm />} />
            <Route path='/test' element={<NewTest />} />
        </Routes>
  )
}

export default Router
