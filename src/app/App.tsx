import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../features/auth/login/Login";
import {Signup} from "../features/auth/signup/Signup";
import {Profile} from "../features/profile/Profile";
import {PageNotFound} from "../common/pageNotFound/PageNotFound";
import {RestorePassword} from "../features/auth/restorePassword/RestorePassword";
import {EnterNewPassword} from "../features/auth/enterPassword/EnterNewPassword";
import {Test} from "../common/Test";

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
