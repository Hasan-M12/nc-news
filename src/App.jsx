import { useState } from 'react'
// import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Articles from './routes/Articles';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/articles' element={<Articles />} />
    </Routes>
    </>
  )
}

export default App
