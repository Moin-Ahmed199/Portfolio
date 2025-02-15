import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      
<div className='nav-logo'>

<h2>Portfolio</h2>

</div>

<nav className='nav-links'>
<ul>
           <a href="https://www.linkedin.com/in/moin-ahmed-90188130a/" target="_blank" rel="noopener noreferrer">
            <li>
              <FaLinkedin />
              </li>
            </a>
         
         
            <a href="https://www.facebook.com/moin.ahmed.77964201/" target="_blank" rel="noopener noreferrer">
            <li>
             <FaFacebook /> 
          </li>
          </a>

          
            <a href="https://www.instagram.com/moin.ahmed199/" target="_blank" rel="noopener noreferrer">
            <li>
              <FaInstagram />
              </li>
            </a>
         
          
        </ul>


</nav>


     
    </header>
  );
};

export default Header;
