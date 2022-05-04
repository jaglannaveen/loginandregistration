import React, {useState, useEffect} from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import {
  logout
} from './Home'
//import { useHistory } from 'react-router-dom';

const Login = ({setLoginUser})  => {

  useEffect(() => {
    checkAutoLogin(dispatch);
  }, []);
  localStorage.removeItem('userDetails');
  const navigate = useNavigate()
  const[user , setUser] = useState({
   
    email: "",
    password: ""
   
       })
  const handleChange = e => {
    const { name , value } =e.target
    //console.log(name , value)
    setUser({
      ...user,
      [name] : value 
    })
  }
  const saveTokenInLocalStorage =  (token) => {
    token.expireDate = new Date (new Date().getTime()+ token.expiresIn * 1000);
    localStorage.setItem('userDetails', JSON.stringify(token));
  
  }
  const runLogoutTimer = (dispatch, timer) => {
      setTimeout(() => { 
           dispatch(logout())
      }, timer);
      
  }
 const checkAutoLogin = (dispatch) =>{
      const tokenString = localStorage.getItem('user');
      let token = '';
      if (!tokenString) {
        dispatch(logout());
        return;
      }
     
       token =    JSON.parse(tokenString);
        let expireDate = new Date (token.expireDate);
        let todaysDate = new Date();
        if (todaysDate > expireDate) {
          dispatch(logout());
          return;
        }
        dispatch(loginConfirmedAction(token));
        const timer = expireDate.getTime() - todaysDate.getTime();
        runLogoutTimer(dispatch, timer);
  }
  

  //let navigate = useNavigate();
    const login =  async () =>{
    await  axios.post("http://localhost:7009/signIn", user)
      .then ( res => {
        alert(res.data.message)
        console.log(res.data)
        setLoginUser(res.data.user)
        saveTokenInLocalStorage(res.data);
        runLogoutTimer(dispatch, res.data.expiresIn * 1000);
        dispatch(loginConfirmedAction(res.data))
        navigate("/")
      })
    }

  // function handleClick(e) {
  //   e.preventDefault();
  //   navigate("/home");
  // }

  return (
    <div>
      <div className="container">
        {console.log(user)}
        <div className="box">     
          <h6 className="header">LOGIN NOW</h6>

          <div className="fields">
            <input type="email" name="email" value={user.email} className="input" placeholder="USER NAME" onChange={handleChange} />
          </div>

          <div>
            <input type="password" name="password" value={user.password} className="input2" placeholder="********" onChange={handleChange} />{" "}
          </div>

          <div className="check">
            <div className="chere">
              <input type="checkbox" value="REMEMBER" />
              <span>REMEMBER ME</span>
            </div>
            <NavLink className="forgot" to="/signUp" exact>
              FORGOT PASSWORD?
            </NavLink>
          </div>

          <div>
            <button
             
              className="button"
              type="submit"
             
              onClick={login}
            >
              LOGIN
            </button>
          </div>

          <div className="bottom">
           Don't have an account ?  
            <NavLink
              className="register"
              //   style={{ color: "#4c08e2" }}
              to="/signUp"
              exact
            >
              {"  "} SignUp
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
