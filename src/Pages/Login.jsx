/* eslint-disable no-unused-vars */
import React from 'react'
import Templete from '../components/Templete'
import loginImg from '../assets/login.png'

const login = ({ SetIsLoggedIn }) => {
  return (
    <div>
      <Templete
        title="Welcome Back"
        desc1="Build skills for Today, Tommorow, and beyond"
        desc2="Education to future-proof your Carre"
        image={loginImg}
        formtype="login"
        SetIsLoggedIn={SetIsLoggedIn}
      />
    </div>
  )
}

export default login