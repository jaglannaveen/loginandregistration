import React , {useState} from "react";
import {  NavLink , useNavigate} from "react-router-dom";
import "reactjs-popup/dist/index.css";
import axios from "axios";
//const jwt = require("jsonwebtoken")
//const jwt = require("jsonwebtoken");
//import CountrySelector from "./CountrySelector";

function SignUp() {
  const navigate = useNavigate()
            
    const[user , setUser] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
      reEnterPassword: ""
         })
         


    const handleChange = e => {
      const { name , value } =e.target
      //console.log(name , value)
      setUser({
        ...user,
        [name] : value 
      })
    }

  //let navigate = useNavigate();

  const register =  () => {
    const { name,email, phone ,  password, reEnterPassword}  = user
    if(name && email && phone && password && (password === reEnterPassword)){
         
       axios.post("http://localhost:7009/signUp", user)
      .then( res => {
        alert(res.data.message)
        navigate("/")
      })
    }
    else{
        alert("invalid input")
    }
  }
  // function setGender(e) {
  //   console.log(e.target.value);
  // }
  //  function handleChange (e){

  //     const { name, value } = e.target;
  //     this.setState({
  //         [name]: value
  //       });
  // }

  return (

    <form className="container" onsubmit="JavaScript:void(0);">
      {console.log("user",user)}
      <div className="boxSign">
        <h2 className="header">Sign Up</h2>
        <div className="fields">
          <input type="text" name="name" value={user.name} className="input" placeholder="Name" onChange={ handleChange } />
        </div>

        <div className="fields">
          <input type="email" name="email"  value={user.email}   className="input2" placeholder="Email Address" onChange={ handleChange } />
        </div>
        <div className="fields">
          <input type="phone" name="phone" value={user.phone}   className="input2" placeholder="phone no." onChange={ handleChange } />
        </div>
        {/* <div className="fields">
          <CountrySelector  />
        </div> */}

        {/* <div>
            
            <select type="country" className="input2" placeholder="country"/>{" "}
          </div> */}
        {/* <div className="fields"> */}
          {/* datePickerId.max = new Date().toISOString().split("T")[0]; */}
          {/* <input type="date" className="input2" id="datePickerId" /> */}
          {/* <input type="age" className="input2" placeholder="dd/mm/yyyy" /> */}
        {/* </div> */}

        {/* <div className="fields" onChange={setGender}>
          <div className="input4">gender </div>
          <div className="input4">
            <input type="radio" value="MALE" name="gender" /> Male
          </div>
          <div className="input4">
            <input type="radio" value="FEMALE" name="gender" /> Female
          </div>
        </div> */}

        {/* <div className="radio-buttons">
        MALE
        <input
          id="MALE"
          value="MALE"
          name="MALE"
          type="radio"
          onChange={handleChange}
        />
        FEMALE
        <input
          id="FEMALE"
          value="FEMALE"
          name="FEMALE"
          type="radio"
          onChange={handleChange}
        />
      </div> */}

        <div className="fields">
          <input type="password" name="password" value={user.password} className="input2" placeholder="Enter Password" onChange={ handleChange } />{" "}
        </div>
        <div className="fields">
          <input type="password" name="reEnterPassword" value={user.reEnterPassword} className="input2" placeholder="Re Enter Password" onChange={ handleChange } />{" "}
        </div>
        <div>
          <button className="button" type="button" onClick={register}>
            REGISTER
          </button>
        </div>
        <div className="bottom">
            Aleary have an account?
            <NavLink
              className="register"
            
              to="/"
              exact
            >
              {"  "}  LOGIN
            </NavLink>
          </div>
      </div>
    </form>
  );
}

export default SignUp;


