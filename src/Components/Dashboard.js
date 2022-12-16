import React, { useState,useEffect,useRef } from 'react'
import {ref, set, onValue} from 'firebase/database'
import {onAuthStateChanged} from 'firebase/auth'
import {auth, myStorage, db} from '../Schemas/firebase-config'
import {useNavigate} from 'react-router-dom'
import Nav2 from './Nav2';
import Main from './Main'
import { useSelector } from 'react-redux';

function Dashboard() {

  const showNav = useSelector((state) => state.navbar.show)

    const [myUser, setMyUser] = useState({})
    const navigate = useNavigate()


    useEffect(() => {
      onAuthStateChanged(auth, (user)=> {
        if (user){
          setMyUser(user)
            }
            else {
              navigate(-1)
           }
       });
      }, [])

  
    let itemId = 0;
    

    let itemDb = ref(db, "items");
    let itemArray = [];
        onValue(itemDb, (snapshot)=> {
        itemArray = snapshot.val();
            if (itemArray) {
                itemId = itemArray.length
                // displayImages(itemArray)
            }
            else {
                itemId = 0;
            }
        })

  return (
    <div>
      <Nav2 />
        <h3 className='text-center mt-5'>Hi, {myUser?.email}, Welcome to your dashboard</h3>
      {showNav ? (<Main />) : ""}
      {
            itemArray?.map((item, index) => (
                <div key={index}>
                    <img src={item.imageURL} />,
                    {item.itemName},
                    {item.itemPrice}
                </div>
            ))
        }
    </div>
  )
}

export default Dashboard