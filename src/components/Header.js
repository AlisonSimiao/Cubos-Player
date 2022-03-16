import React from 'react'
import "./Header.css"
import logo from "./../assets/logo.svg"
import profile from "./../assets/profile.jpg"

function Header() {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="cubos player logo"/>
        </div>
        <div className="profile">
            <img src={profile} alt="cubos player logo" className="profile-img"/>
            <p className="profile-text">bem vindo, <strong>Daniel</strong></p>
        </div>
    </nav>
  )
}

export default Header