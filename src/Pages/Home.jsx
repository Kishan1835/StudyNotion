/* eslint-disable no-unused-vars */
import React from 'react'
const Home = ({ SetIsLoggedIn }) => {
    return (
        <div className=' flex justify-center items-center text-white text-3xl h-full font-semibold'>
            Home
        </div>
    )
}

Home.propTypes = {
    SetIsLoggedIn: PropTypes.func.isRequired
};


export default Home