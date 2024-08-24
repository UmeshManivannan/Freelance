import React from 'react'
import './Women.css'
import women_sec from '../Assets/women_sec.jpg'
import { Link } from 'react-router-dom'

const Women = () => {
  return (
    <div className='women'>
        <div className="women-section">
            <img src={women_sec} alt="" />
            <div className="cont">
                <div className="fashion">WOMEN</div>
    
               <Link to='/display'><button>SEE MORE</button></Link> 
            </div>
            
        </div>
      
    </div>
  )
}

export default Women
