import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";
import Login from './component/Login';
import SignUp from './component/SignUp';
import Home from './component/Home';
import {useState, useEffect} from "react"
import { useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch();
  
const [ user , setLoginUser] = useState({})

  return (
    <div className="App">
          <Routes>
            <Route exact path='/' element=
            {
              user && user._id
              ?
              <Home setLoginUser={setLoginUser} />
              :
              <Login setLoginUser={setLoginUser} />
            } >    

             </Route>
            <Route path="/signIn" element={(props) => <Login {...props} setLoginUser={setLoginUser} />} />
            {/* <Route  path='/home' element={<Home/>} /> */}
            <Route path="/signUp" element={<SignUp />} />
            </Routes>
    </div>
  );
}

export default App;
