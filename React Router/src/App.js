import './App.css';
import Navbar from './compoenents/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className="container">
     {/* I want navbar to be in every page that's why it is outside of Routes */}
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
     </Routes>
     </div>
    </div>
  );
}

export default App;
