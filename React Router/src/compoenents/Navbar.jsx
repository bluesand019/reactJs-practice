import React from 'react'
import logo from '../assets/twitch.png'
import '../App.css'
import { Link, NavLink, replace } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    //useNavigate hook
    const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />
      <ul>
        {/* better to use NavLink rather than Link because is shows active class */}
       <NavLink to='/'><li>Home</li></NavLink>
       <NavLink to='/products'><li>Products</li></NavLink>
       <NavLink to='/about'><li>About</li></NavLink>
       <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>
      {/* //useNavigate navigates to a path, replace attribute replaces the current page with the path */}
      <button onClick={() => navigate('/contact', {replace:true})}>Get Started</button>
    </div>
  )
}

export default Navbar
