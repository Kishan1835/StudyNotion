/* eslint-disable no-unused-vars */
import React from 'react'
import Templete from '../components/Templete'
import signupImg from '../assets/signup.png'

const signUp = ({ SetIsLoggedIn }) => {
  return (
    <div>
      <Templete
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for Today, tommorow, And Beyond"
        desc2="Education to future-proof your career."
        image={signupImg}
        formtype="signup"
        SetIsLoggedIn={SetIsLoggedIn}


      />
    </div>
  )
}

export default signUp