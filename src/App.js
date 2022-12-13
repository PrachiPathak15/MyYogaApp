import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Payment from './Payment'
import Success from './Success'
const App = () => {
  return (
    <BrowserRouter>
    <switch>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payment' element={<Payment />} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </switch>
    </BrowserRouter>
  )
}

export default App