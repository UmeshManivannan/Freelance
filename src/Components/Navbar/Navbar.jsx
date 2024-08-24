import React from 'react'
import './Navbar.css'
import shop from '../Assets/shop-bag.png'

const Navbar = () => {
  return (
    <div className='container'>
        <div className="cont2">
        <h1>BRAND X</h1>
        <div className="nav-menu">
            <ul>
                <li>WOMEN</li>
                <li>MEN</li>
                <li>KIDS</li>
                <li>BEAUTY</li>
            </ul>
        </div>
        <div className="nav-right">
             <button>Login</button>
             <img src={shop} alt="" />
        </div>
        </div>
        
      
    </div>
  )
}

export default Navbar
