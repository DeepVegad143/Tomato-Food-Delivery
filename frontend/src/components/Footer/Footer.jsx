import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p> 
                    Fast, fresh, and flavorful food delivery you can count on.
                    Powered by passion and delivered with care, we bring delicious meals right to your doorstep.
                    At Tomato, we believe in making every bite count—ensuring quality, reliability, and satisfaction with every order.
                    Your cravings, our commitment.
                </p>
                <div className="footer-social-icons">
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>FOOD AT YOUR HOME!!</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch!</h2>
                <ul>
                    <li>+1-986-254-2865</li>
                    <li>contac_tomato@food.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2025, Tomato - Food Delivery. All rights reserved.
        </p>    
    </div>
  )
}

export default Footer
