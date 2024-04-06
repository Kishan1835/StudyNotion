/* eslint-disable no-unused-vars */
import React from 'react'
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import PropTypes from 'prop-types';
import { FcGoogle } from "react-icons/fc";


const Templete = ({ title, desc1, desc2, image, formtype, SetIsLoggedIn }) => {

    Templete.propTypes = {
        title: PropTypes.string.isRequired,
        desc1: PropTypes.string.isRequired,
        desc2: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        formtype: PropTypes.string.isRequired,
        SetIsLoggedIn: PropTypes.func.isRequired,
    };

    return (
        <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>

            <div className='w-11/12 max-w-[450px]'>
                <h1
                    className=' text-richblack-5 font-semibold text-[1.8rem] leading-[2.375rem'>
                    {title}
                </h1>
                
                <p className='text-[1.125rem] leading-[1.825rem] mt-4'>
                    <span className='text-richblack-100'>{desc1}</span>
                    <br />
                    <span className='text-blue-100 italic '>{desc2}</span>
                </p>

                {formtype === "signup" ?
                    (<SignupForm SetIsLoggedIn={SetIsLoggedIn} />) :
                    (<LoginForm SetIsLoggedIn={SetIsLoggedIn} />)}

                <div className='flex w-full items-center my-4 gap-x-2 '>
                    <div className=' w-full h-[1px] bg-richblack-700'></div>

                    <p className='text-richblack-700 font-medium leading-[1.375rem]'>
                        OR
                    </p>

                    <div className=' w-full h-[1px] bg-richblack-700'></div>
                </div>

                <button className='w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle/>
                    <p>Sign Up with Google</p>
                </button>

            </div>


            <div className='relative w-11/12 max-w-[450px]'>
                <img src={frameImage}
                    alt="pattern"
                    width={558}
                    height={504}
                    loading='lazy' />

                <img src={image}
                    alt="Students"
                    width={558}
                    height={490}
                    loading='lazy'
                className='absolute -top-4 right-4'/>
            </div>

        </div>
    )
}

export default Templete