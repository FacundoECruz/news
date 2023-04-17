import NavLinks from "../navLinks/NavLinks";
import Show from "../Show/Show"
import NotFoundScreen from "../notFoundScreen/NotFoundScreen";
import Explore from "../explore/Explore";
import {Routes, Route, Link} from "react-router-dom"
import { useState, useEffect } from "react";
import "./AuthenticatedApp.css";


function AuthenticatedApp({ user, logout }) {
  
  return (
    <div className="main-container">
      <div className="user-options">
        <p className="username">{user}</p>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
      <div className="body-container">
        <NavLinks logout={logout} user={user} />   
      </div>
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

function AppRoutes() {
  return(
    <Routes>
      <Route path="/explore" element={<Explore />}/>
      <Route path="/news/:newsTitle" element={<Show />}/>
      <Route path="*" element={<NotFoundScreen />}/>
    </Routes>
  )
}

export default AuthenticatedApp;
