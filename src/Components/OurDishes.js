import React, {useEffect} from 'react'
// import Nav from './Nav'
import {ref, onValue} from 'firebase/database';
import { useSelector,useDispatch } from 'react-redux';
import {db} from '../Schemas/firebase-config'
// import Nav2 from './Nav2';
import { setnavbar } from '../features/navbarSlice';
import { addToCart } from '../features/cartSlice';

function OurDishes() {
//   const showNav2 = useSelector((state) => state.navbar.navbar)
//   const isLoggedin = useSelector((state) => state.navbar.isLoggedin)
  const showNav = useSelector((state) => state.navbar.show)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(setnavbar())
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

        const handleAddToCart = (item) => {
            dispatch(addToCart(item))
        }

  return (
    <div>
       {/* {showNav2 && isLoggedin===true ? (<Nav2 />) : showNav2 && isLoggedin===false ? (<Nav />):  ""} */}
       <h2 className='fs-1 text-center mt-5'>Our daily dishes</h2>
       <p className='text-center'>Check out various delicacies of your choice</p>
      {showNav ? (
          <div>
            {
          itemArray.map((item, index) => (
          <div key={index}>
            <div className='container mt-5 mb-5 py-5 px-5'>
                <div className='row'>
                    <div className='cardcontainer'>
                        <div class="card col-md-4 col-lg-3 ms-md-2 ms-lg-3 shadow">
                            <img class="card-img-top" src={item.imageURL}alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title text-center fw-bold">{item.itemName}</h5>
                                <p class="card-text text-center">{item.itemPrice}</p>
                            </div>
                            <button onClick={() => handleAddToCart(item)} className='signupbtn w-75 m-auto mb-3'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          ))}
          </div>
      ) : ""}
    </div>
  )
}

export default OurDishes