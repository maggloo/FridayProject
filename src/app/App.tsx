import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../features/authHandle/login/Login";
import {Signup} from "../features/authHandle/signup/Signup";
import {Profile} from "../features/profile/Profile";
import {PageNotFound} from "../features/pageNotFound/PageNotFound";
import {RestorePassword} from "../features/authHandle/restorePassword/RestorePassword";
import {EnterNewPassword} from "../features/authHandle/enterPassword/EnterNewPassword";
import {Test} from "../components/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Profile/>}/>
        <Route path={'/login'} element={<Login />}/>
        <Route path={'/signup'} element={<Signup />}/>
        <Route path={'/404'} element={<PageNotFound />}/>
        <Route path={'/restorePassword'} element={<RestorePassword />}/>
        <Route path={'/enterNewPassword'} element={<EnterNewPassword />}/>
        <Route path={'/test'} element={<Test />}/>
        <Route path='*' element={ <Navigate to={'/404'}/> }/>
      </Routes>
    </div>
  );
}

export default App;
