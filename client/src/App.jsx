import * as React from 'react';
import Home from './Pages/Home.jsx';
import Plan from './Pages/Plan.jsx';
import Coupon from './Pages/Coupon.jsx';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/coupon" element={<Coupon/>}/>
      </Routes>
    </>
  )
}

export default App
