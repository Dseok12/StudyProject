import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {
  return(
    <>
      <div className="header_wrap">
        <div className="clearfix inner">
          <h1>
            <Link to='/'>
              React PF
            </Link>
          </h1>
          <ul className="clearfix main_menu_wrap">
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li>
              <Link to='/portfoilo'>PORTFOLIO</Link>
            </li>
            <li>
              <Link to='/contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;