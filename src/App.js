import React from "react";

import{login, logout} from "./features/userSlice";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { useSelector } from "react-redux";
import { auth } from "./firebase";
import {useEffect} from "react";
import Widgets from "./Widgets";





function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();



  useEffect(() => {
    auth.onAuthStateChanged( userAuth => {
      if (userAuth){

        // user is logged in

        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName : userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      }else{
        //user is logged out
        dispatch(logout());
      }
  });
}, []);

  return (
    <div className="app">
   
 
    
    
      {!user ? (
        <Login />
       
      ) : (

        <><Header /><div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div></>
      )}
    </div>
  );
}

export default App;
