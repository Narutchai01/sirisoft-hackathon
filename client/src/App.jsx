import * as React from 'react';
import Home from './Pages/Home.jsx';
import Plan from './Pages/Plan.jsx';
import Coupon from './Pages/Coupon.jsx';
import Nav from './Component/Nav.jsx';
import Map from './Component/Map/Map.jsx';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/coupon" element={<Coupon/>}/>
        <Route path="/map" element={<Map/>}/>
      </Routes>
    </>
  )
}

export default App
