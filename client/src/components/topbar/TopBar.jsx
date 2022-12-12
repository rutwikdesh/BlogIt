import './topbar.css'
import dp from '../../images/dp.png'
import React from 'react'
import { Link } from "react-router-dom"
import logo from '../../images/mylogo.png'

export default function TopBar() {
  const user = false;
  return (
    <div className='top-bar'>
      {/* <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div> */}

      <div className='topLeft'>
        <img src={logo} alt="logo" className='blog-logo'/>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className='link' to="/">Home</Link>
          </li>
          <li className="topListItem">
            <Link className='link' to="/">About</Link>
          </li>
          <li className="topListItem">
            <Link className='link' to="/">Contact</Link>
          </li>
          <li className="topListItem">
            <Link className='link' to="/write">Post</Link>
          </li>
          <li className="topListItem">
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={dp}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i class="searchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
