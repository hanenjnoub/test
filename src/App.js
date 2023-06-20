import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Contact from './Contact';
import Our_server from './Our_server';
import { Routes, Route } from "react-router-dom";
import React from 'react';


function App() {
  const date=require("../middleware/Date")
  return (
    <div className="App">
     <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Our_server" element={<Our_server />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
