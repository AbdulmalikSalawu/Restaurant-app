import React, {useState} from 'react';
import {ref, set, onValue} from 'firebase/database';
import {ref as stRef, uploadBytes, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {auth, db, myStorage} from '../Schemas/firebase-config'

function AddFile() {
    const [itemName, setItemName] = useState("")
    const [itemPrice, setItemPrice] = useState("")
    const [itemFile, setItemFile] = useState([])
    const [percentage, setPercentage] = useState("")

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
    
    const saveItem =  () => {
        let fileRef = stRef(myStorage, `downloads/${itemFile.name}`);
            let uploadFile = uploadBytesResumable(fileRef, itemFile);
            uploadFile.on(`state_changed`, function(snapshot){
                setPercentage(Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100));
            },
            function(error){
                console.log(error);
            },
            function (){
                uploadBytes(fileRef, itemFile).then((snapshot)=>{
                    console.log(snapshot);
                }).catch((error)=>{
                    console.log(error);
                })
             setPercentage("sent")
             getDownloadURL(fileRef).then((url)=>{
                let imageURL = url;
                let itemObj = {itemName, itemPrice, imageURL}
                let dbRef = ref (db, `items/${itemId}`)
                set (dbRef, itemObj);
                alert("sent")
             })
            })
        }
        
    // const saveItem = async () => {
    //     let itemObj = {itemName, itemPrice}
    //     let dbRef = ref (db, `items/${itemId}`)
    //     await set (dbRef, itemObj);
    //     alert("sent")
    // }

  return (
    <div>
        <input type='text' className='w-75 d-block m-auto mt-5' placeholder='name' onChange={e => {setItemName(e.target.value)}} />
        <input type='text' className='w-75 d-block m-auto mt-4'  placeholder='name' onChange={e => {setItemPrice(e.target.value)}} /><br />
        <input type='file' accept="image/*" placeholder='file' onChange={e => {setItemFile(e.target.files[0])}} />
        <button className='btn btn-success px-3 py-1 w-25 fs-5 d-block m-auto mt-4' onClick={saveItem}>SAVE</button>
        <p className='fs-4 text-info text-center mt-5'>{`${percentage}%`}</p>
    </div>
  )
}

export default AddFile