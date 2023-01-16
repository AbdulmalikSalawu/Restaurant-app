import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Signup from './Components/Signup';
import Login from './Components/Login';
import NoMatch from './Components/NoMatch';
import WhyChoose from './Components/WhyChoose';
import Dashboard from './Components/Dashboard';
import AddFile from './Components/AddFile';
import OurDishes from './Components/OurDishes';
import Nav from './Components/Nav';
import Nav2 from './Components/Nav2';
import { useSelector } from 'react-redux';
import CartPage from './Components/CartPage';

function App() {
  const isLoggedin = useSelector((state) => state.navbar.isLoggedin)
  return (
    <div>
      {isLoggedin===true ? (<Nav2 />) : isLoggedin===false ? (<Nav />):  ""}
        <Routes>
          <Route path='/' element={isLoggedin ? <Dashboard /> : <Home />}></Route>
          <Route path='/whychoose' element={<WhyChoose />}></Route>
          <Route path='about' element={<About />} />
          <Route path='ourdishes' element={<OurDishes />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='addfile' element={<AddFile />} />
          <Route path='carts' element={<CartPage />} />
          <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
