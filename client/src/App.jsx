import * as React from 'react';
import Home from './Pages/Home.jsx';
import Plan from './Pages/Plan.jsx';
import Coupon from './Pages/Coupon.jsx';
import Minigame from './Pages/Minigame.jsx';
import Nav from './Component/Nav.jsx';
import Mall from './Pages/Mall.jsx';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/coupon" element={<Coupon/>}/>
        <Route path="/minigame" element={<Minigame/>} />
        <Route path="/mall" element={<Mall/>}/>
      </Routes>
    </>
  )
}

export default App
