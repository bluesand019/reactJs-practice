import './App.css';
import { useState } from 'react';
import Note from './Note';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
     <Note />
    </div>
    
  );
}

export default App;
