import React, {useEffect, useState} from 'react'
// import Nav from './Nav'
import {ref, onValue, set} from 'firebase/database';
import { useSelector,useDispatch } from 'react-redux';
import {auth, db} from '../Schemas/firebase-config'
// import Nav2 from './Nav2';
import { setnavbar,setShow } from '../features/navbarSlice';
import { addToCart } from '../features/cartSlice';
import { useNavigate } from 'react-router';
import arrow from '../Assets/arrow-left.svg'
// import { onAuthStateChanged } from 'firebase/auth';

function Dishes() {
//   const showNav2 = useSelector((state) => state.navbar.navbar)
//   const isLoggedin = useSelector((state) => state.navbar.isLoggedin)
  
  const [myUser, setMyUser] = useState({})
  const showNav = useSelector((state) => state.navbar.show)
  const isLoggedin = useSelector((state) => state.navbar.isLoggedin)
  const [names, setNames] = useState("")
  const [newNames, setNewNames] = useState([])
  const backIcon = useSelector((state) => state.navbar.backIcon)
  const myCart = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  let orderId = 0;
  let orderDb = ref(db, "orders");
  let orderArray = [];
      onValue(orderDb, (snapshot)=> {
      orderArray = snapshot.val();
          if (orderArray) {
            orderId = orderArray.length
          }
          else {
            orderId = 0;
          }
      })

  const handleAddToCart = (item) => {
    if(isLoggedin===true){    
      dispatch(addToCart(item));
      let orderObj = {
        imageURL:item.imageURL, 
        itemName: item.itemName, 
        itemPrice:item.itemPrice,
        uniqueId: myUser?.uid
      }
      let dbRef = ref (db, `orders/${orderId}`)
      set(dbRef, orderObj);
    } else {
      navigate('/login')
    }
};

  useEffect(() => {
      dispatch(setnavbar())
      dispatch(setShow())
    }, [])

    let itemId = 0;
    
    let itemDb = ref(db, "items");
    let itemArray = [];
        onValue(itemDb, (snapshot)=> {
        itemArray = snapshot.val();
            if (itemArray) {
                itemId = itemArray.length
            }
            else {
                itemId = 0;
            }
        })  
        const showString = (e) => {
          setNames(e.target.value)
          setNewNames(itemArray.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(names.toLowerCase())
            }))
      }

  return (
    <div className='mt-5 pt-3'>
       {backIcon ? ( <img src={arrow} onClick={()=>navigate(-1)} className='ms-3 col-1 mt-1' alt='back' />) : ""}
       <h2 className='fs-1 text-center mt-1'>Our daily dishes</h2>
       <p className='text-center pe-3'>Check out various delicacies of your choice</p>
      {showNav ? (
          <div>
             <input className='col-sm-10 col-md-6 col-lg-2 pe-3 rounded-pill d-block m-auto text-center' onChange={showString} placeholder='search food' />
             {names!==""? (
          newNames.map((item, index) => (
          <div key={index}>
            <div className='container mt-5 mb-5 py-5 px-5'>
                <div className='row'>
                    <div className='cardcontainer'>
                        <div key={item.index} className="card col-md-4 col-lg-3 ms-md-2 ms-lg-3 shadow">
                            <img className="card-img-top" src={item.imageURL}alt="loading" />
                            <div className="card-body">
                                <h5 className="card-title text-center fw-bold">{item.itemName}</h5>
                                <p className="card-text text-center">${item.itemPrice}</p>
                            </div>
                            {/* <button className='btn px-2 py-2 mb-3 detailsBtn w-75 m-auto' onClick={()=>handleMoreInfo(item)}>Details</button> */}
                            <button onClick={() => handleAddToCart(item)} className='signupbtn w-75 m-auto mb-3'>{isLoggedin ? "Add to cart" : "Order"}</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          ))) : names=="" ? (
            <div>
            {
              itemArray.map((item, index) => (
              <div key={index}>
                <div className='container mt-5 mb-5 py-5 px-5'>
                    <div className='row'>
                        <div className='cardcontainer'>
                            <div key={item.index} className="card col-md-4 col-lg-3 ms-md-2 ms-lg-3 shadow">
                                <img className="card-img-top" src={item.imageURL}alt="loading" />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">{item.itemName}</h5>
                                    <p className="card-text text-center">${item.itemPrice}</p>
                                </div>
                                {/* <button className='btn px-2 py-2 mb-3 detailsBtn w-75 m-auto' onClick={()=>handleMoreInfo(item)}>Details</button> */}
                                <button onClick={() => handleAddToCart(item)} className='signupbtn w-75 m-auto mb-3'>{isLoggedin ? "Add to cart" : "Order"}</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              ))}
            </div>
          ) : ""}
          </div>
      ) : ""}
    </div>
  )
}

export default Dishes