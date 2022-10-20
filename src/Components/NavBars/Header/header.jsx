

import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import { BsTagsFill } from "react-icons/bs";
import "../../../Styles/Header/header.css";
const Header = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
      <div className="navbar">
        <div className="container">
          <h1>
            <span>
              <BsTagsFill />
              Re-
            </span>
            TRIP
          </h1>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sell Tickets</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <button className="btn">Sign In</button>
          <button className="btn">Sign Up</button>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaRegTimesCircle className="icon" />
            ) : (
              <HiOutlineMenuAlt4 className="icon" />
            )}
          </div>
        </div>
      </div>
    );
}

export default Header

