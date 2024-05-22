import React, { useState } from "react"
// import axios from "axios"

function NoMatch() {
  const [firstname,setFirstname] = useState("")
  const [lastname,setLastname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("")
  const [file, setFile] = useState("")

  // Making a GET request 
  // const url = "http://localhost:5000/testApi"
  // const callOnApi = ()=>{
  //     axios.get(url).then((res)=>{
  //         console.log(res)
  //     })
  // }

  //Converting images to base 64
  // const [newImage, setNewImage] = useState("")
  // const getFile = (e)=>{
  //   const myFile = e.target.files[0]
  //   const reader = new FileReader()
  //   reader.readAsDataURL(myFile);
  //   reader.onload = ()=>{
  //     setFile(reader.result)
  //   }
  // }

  //Uploading images to the cloudinary/POST request
  // const upload = ()=>{
  //   const url = "http://localhost:5000/saveFile"
  //   const userData = {file}
  //   axios.post(url,userData).then((response)=>{
  //     setNewImage(response.data.image)
  //   })
  //   .catch((error)=>{
  //       console.log(error)
  //   })
  // }

  //Registering data to the mongodb database
    // const registerUser = ()=>{
    //   const url = "http://localhost:5000/signup"
    //   axios.post(url,{firstname,lastname,email,password}).then((response)=>{
    //       console.log(response.data)
    //       setMessage(response.data.message)
    //   }).catch((error)=>{
    //       console.log(error)
    //   })
    // }

    //Logging in users
    //FETCH METHOD
    const loginBtn = ()=> {
        fetch("http://localhost:5000/loginUser", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Alow-Origin": "*"
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if(data.status == "ok"){
            alert("login successful");
            localStorage.setItem("token", JSON.stringify(data.data));
            window.location.href = "/userdeets"
          }
        });
    }

    //AXIOS METHOD
    // const loginBtn = ()=> {
    //     const url = "http://localhost:5000/loginUser"
    //     axios.post(url,{email,password}).then((response)=>{
    //       console.log(response.data)
    //       if(response.data.status == "ok") {
    //           alert("login successful");
    //           localStorage.setItem("token",JSON.stringify(response.data.data));
    //           window.location.href = "/userdeets"
    //       }
    //     }).catch((error)=>{
    //       console.log(error)
    //     })
    // }

  return (
    <div className="mt-5 pt-3">
        <h2 className="text-center mt-3">ERROR 404!!</h2>
        <h4 className="text-center mt-2">No Match Found</h4>

        {/* Making a get request to the server */}
        {/* <button onClick={callOnApi}>Fetch</button> */}


        {/* Uploading image to the cloud storage */}
        {/* <input type="file" onChange={(e)=>getFile(e)}/><br />
        <button className="btn btn-info px-2 d-block m-auto mt-2" onClick={upload}>Upload</button>
        <img className="w-50" src={newImage} alt="" /> */}


        {/* Registering data to the mongodb database */}
        {/* <h4 className="text-center text-success mt-4">{message}</h4>
        <input type="text" placeholder="firstname" name="firstname" className="form-control w-75 d-block m-auto mt-4 text-center" onChange={(e)=>(setFirstname(e.target.value))} />
        <input type="text" placeholder="lastname" name="lastname" className="form-control w-75 d-block m-auto mt-3 text-center" onChange={(e)=>(setLastname(e.target.value))} />
        <input type="text" placeholder="email" name="email" className="form-control w-75 d-block m-auto mt-3 text-center" onChange={(e)=>(setEmail(e.target.value))} />
        <input type="password" placeholder="password" name="password" className="form-control w-75 d-block m-auto mt-3 text-center" onChange={(e)=>(setPassword(e.target.value))} />
        <button className="btn btn-info px-3 py-2 w-75
         mt-4 fs-5 d-block m-auto" onClick={registerUser}>Create Account</button> */}

        {/* Login users in */}
        <input type="text" placeholder="email" name="email" className="form-control w-75 d-block m-auto mt-4 text-center" onChange={(e)=>(setEmail(e.target.value))} />
        <input type="text" placeholder="password" name="password" className="form-control w-75 d-block m-auto mt-4 text-center" onChange={(e)=>(setPassword(e.target.value))} />
        <button className="btn btn-success d-block m-auto px-3 py-1 mt-3 w-75" onClick={loginBtn}>Login</button>
    </div>
  )
}

export default NoMatch