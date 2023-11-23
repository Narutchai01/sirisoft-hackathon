import * as React from 'react';
import Home from './Pages/Home.jsx';
import Plan from './Pages/Plan.jsx';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </>
  )
}

export default App
