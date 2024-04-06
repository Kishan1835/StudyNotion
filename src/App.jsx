import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './Pages/Home'
import Login from './Pages//Login'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const [isLoggedIn, SetIsLoggedIn] = useState(false);


  return (
    <div className='h-screen bg-richblack-900 flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} SetIsLoggedIn={SetIsLoggedIn} />

      <Routes>

        <Route path='/' element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path='/login' element={<Login SetIsLoggedIn={SetIsLoggedIn} />} />
        <Route path='/signup' element={<SignUp SetIsLoggedIn={SetIsLoggedIn} />} />
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>

        } />

      </Routes>
    </div >
  )
}

export default App
