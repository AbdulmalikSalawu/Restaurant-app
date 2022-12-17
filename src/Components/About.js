import React from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux';
import Nav2 from './Nav2';

function About() {
  const showNav2 = useSelector((state) => state.navbar.navbar)
  const isLoggedin = useSelector((state) => state.navbar.isLoggedin)
  
  return (
    <div>
      {showNav2 && isLoggedin===true ? (<Nav2 />) : showNav2 && isLoggedin===false ? (<Nav />):  ""}
      
        <h3>This is the about page</h3>
    </div>
  )
}

export default About