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
import { onAuthStateChanged } from 'firebase/auth';

function OurDishes() {
//   const showNav2 = useSelector((state) => state.navbar.navbar)
//   const isLoggedin = useSelector((state) => state.navbar.isLoggedin)
  const [names, setNames] = useState("ade")
  // const [nameArray, setNameArray] = useState(["Wale", "Bola", "Segun", "Nihmot", "Muhammad", "Titilayo", "Faridah", "Makinde"])
  const [newNames, setNewNames] = useState(["ade","bola"])
  const [myUser, setMyUser] = useState({})
  const showNav = useSelector((state) => state.navbar.show)
  const isLoggedin = useSelector((state) => state.navbar.isLoggedin)
  const backIcon = useSelector((state) => state.navbar.backIcon)
  const myCart = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user)=> {
      if (user){
        setMyUser(user)
          }
          else {
            navigate("/login")
         }
     });
    }, [])

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
      
    //   const showString = () => {
    //    setNewNames(nameArray.filter(newList => newList.includes(names)))
    // }
      const showString = () => {
        console.log("working")
      //  setNewNames(itemArray.filter(newList => newList.includes(names)))
    }
    const moreBtn = () => {
        navigate('/alldishes')
    }


  return (
    <div className='mt-5 pt-3'>
       {/* {showNav2 && isLoggedin===true ? (<Nav2 />) : showNav2 && isLoggedin===false ? (<Nav />):  ""} */}
       {backIcon ? ( <img src={arrow} onClick={()=>navigate(-1)} className='ms-3 col-1 mt-1' alt='back' />) : ""}
       <h2 className='fs-1 text-center mt-1'>Our daily dishes</h2>
       <p className='text-center pe-3'>Check out various delicacies of your choice</p>
      {showNav ? (
          <div>

            <input className='col-sm-10 col-md-6 col-lg-2 pe-3 rounded-pill d-block m-auto text-center' onChange={e=> setNames(e.target.value)} onInput={showString} placeholder='search food' />
            
          {
          itemArray.filter((item,index)=>index>0&&index<5).map((item, index) => (
          <div key={index}>
            <div className='container mt-5 mb-5 py-5 px-5'>
                <div className='row'>
                    <div className='cardcontainer'>
                        <div key={item.index} className="card col-md-4 col-lg-3 ms-md-2 ms-lg-3 shadow">
                            <img className="card-img-top" src={item.imageURL}alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-center fw-bold">{item.itemName}</h5>
                                <p className="card-text text-center">${item.itemPrice}</p>
                            </div>
                            <button onClick={() => handleAddToCart(item)} className='signupbtn w-75 m-auto mb-3'>{isLoggedin ? "Add to cart" : "Order"}</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          ))}
          <button onClick={moreBtn} className='btn moreBtn px-2 py-2 d-block m-auto mb-5'>More</button>
          </div>
      ) : ""}
    </div>
  )
}

export default OurDishes