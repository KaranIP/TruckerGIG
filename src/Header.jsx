import React from 'react'
import './header.css'
import logo from '../src/photos/logo_black.png'
import { IoPerson } from "react-icons/io5";

const Header = () => {
  return (
    <>
    <nav>
        <img className='logo' src={logo} alt="logo" width="50px" height="50px" />
        <ul>
            
            <li>About US</li>
            <li>Market Place</li>
            <li>Events</li>
            <li>Register</li>
            <li>Log in <IoPerson /></li>
        </ul>
    </nav>
    </>
  )
}

export default Header