import React,{useState,useEffect} from 'react';
import '../../../Styles/Header/header.css'

function Header() {
  return (
<>
<div>
   <nav className="navbar">
     <div className="logo">Re-Trip</div>
     <ul className="nav-links">
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" className="hamburger">&#9776;</label>
       <div className="menu">
         <li><a href="/sell-tickets">Sell Tickets</a></li>
         <li><a href="/sign-in">Sign In</a></li>
         <li className="services">
           <a href="/sign-up">Sign Up</a>
         </li>
         <li><a href="/">Contact Us</a></li>
       </div>
     </ul>
   </nav>
 </div>
</>
  );
  }
export default Header;
