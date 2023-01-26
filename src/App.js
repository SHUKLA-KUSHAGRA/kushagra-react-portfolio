import React from 'react';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Front from './components/Front';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <Routes>
          <Route exact path="/" element={<Front/>}/>
          <Route exact path="/education" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;