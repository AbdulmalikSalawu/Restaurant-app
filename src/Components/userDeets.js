import React, {useEffect,useState} from "react"
// import axios from "axios"

const UserDeets = () => {
    const [userData,setUserData] = useState("")
    
      //AXIOS method
        // const url = "http://localhost:5000/userData";
        // // JSON.stringify({
        //   token:window.localStorage.getItem("token")
        // // })
        // axios.post(url)
        // .then((res)=>res.json())
        // .then((data)=> {
        //     console.log(data, "userData")
        //     setUserData(data.data)
        //   })
        // .catch((error)=>{
        //   console.log(error)
        // })


      //FETCH method
      const getDetails = () => {
        const token = localStorage.getItem("token")
        fetch("http://localhost:5000/userData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token
          }),
        })
        .then((res)=>res.json())
        .then((data)=> {
            console.log(data, "userData")
            localStorage.getItem("token")
            setUserData(data.data)
          })
          .catch((error)=>{
              console.log(error)
          })
      }

      const signOut =()=> {
        localStorage.clear()
        window.location.href = "/djdjd"
      }

    return(
        <div className="mt-5 pt-5">
          <h2 className="mt-5">ur details</h2>
            {userData.firstname}
            {userData.email}
            <button onClick={getDetails} className="btn btn-info px-3 py-2 d-block m-auto mb-3 mt-5">Get details</button>
            <button className="btn btn-danger px-3 py-2 d-block m-auto" onClick={signOut}>Logout</button>
        </div>
    )
}

export default UserDeets