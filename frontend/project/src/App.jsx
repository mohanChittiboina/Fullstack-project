import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Courses from './Courses';
import AboutUs from './AboutUs';
import Assignments from './Assignments';
import Navbar from './Navbar';
import Buy from './Buy';
import Login from './Login';
import Registration from './Registration';
import Certificate from './Certificate';
import Verify from './Verify';
export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/assig' element={<Assignments/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/certificate' element={<Certificate/>}/>
        <Route path='/verify' element={<Verify/>}/>
      </Routes>
    </div>
  )
}
export default App;