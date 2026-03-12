import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='navbar'>
          <li><Link to={`/`}> Home</Link> </li>
          <li><Link to={`/page1`}>Page 1</Link></li>
          <li><Link to={`/page2`}>Page 2</Link></li>
          <li><Link to={`/page3`}>Page 3</Link></li>
          
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar
