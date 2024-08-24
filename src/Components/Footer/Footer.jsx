import React from 'react'
import './Footer.css'
import facebook from '../Assets/facebook.png'
import youtube from '../Assets/youtube.png'
import insta from '../Assets/insta.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer2">
            <div className="shop">
                
                <ul>
                    <li><h2>Shop</h2></li>
                    <li>WOMEN</li>
                    <li>MEN</li>
                    <li>KIDS</li>
                    <li>STUDENT DISCOUNT</li>
                    <li>GIFT CARDS</li>
                    <li>MAGAZINE</li>
                </ul>
            </div>
            <div className="shop">
                
                <ul>
                    <li><h2>CORPORATE INFO</h2></li>
                    <li>ABOUT BRANDX GROUP</li>
                    <li>SUSTAINABILITY BRANDX GROUP</li>
                    <li>INVESTOR RELATIONS</li>
                    <li>STUDENT DISCOUNT</li>
                    <li>GIFT CARDS</li>
                    <li>MAGAZINE</li>
                </ul>
            </div>
            <div className="shop">
                
                <ul>
                    <li><h2>HELP</h2></li>
                    <li>CUSTOMER SERVICES</li>
                    <li>MY ACCOUNT</li>
                    <li>FIND A STORE</li>
                    <li>LEGAL & PRIVACY</li>
                    <li>GIFT CARD TERMS AND CONDITIONS</li>
                    <li>MAGAZINE</li>
                </ul>
            </div>
            <div className="shop-last">
                <form>
                    <label htmlFor="">COUNTRY / REGION</label><br/>
                    <input type="text" /><br/>
                    <label htmlFor="">LANGUAGE</label><br/>
                    <input type="text" name="" id="" />
                </form>
                
            </div>
        </div>
        <div className="brand"><h1>BRANDX</h1></div>
        <div className="copyright">
            <p>The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB. H&M is committed to accessibility. That commitment means H&M embraces WCAG guidelines and supports assistive technologies such as screen readers. If you are using a screen reader, magnifier, or other assistive technologies and are experiencing difficulties using this website, please call our TOLL-FREE support line (855-466-7467) for assistance.</p>
            <ul>
                <li><img src={facebook} alt="" /></li>
                <li><img src={youtube} alt="" /></li>
                <li><img src={insta} alt="" /></li>
            </ul>
        </div>
        
      
    </div>
    
  )
}

export default Footer
