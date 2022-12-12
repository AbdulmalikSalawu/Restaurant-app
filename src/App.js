import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
// import Nav from './Components/Nav';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Signup from './Components/Signup';
import Login from './Components/Login';
import NoMatch from './Components/NoMatch';
import WhyChoose from './Components/WhyChoose';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/whychoose' element={<WhyChoose />}></Route>
          <Route path='about' element={<About />} />
          <Route path='testimonials' element={<Testimonials />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
