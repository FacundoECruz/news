import Show from "../Show/Show";
import NotFoundScreen from "../notFoundScreen/NotFoundScreen";
import Explore from "../explore/Explore";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./AuthenticatedApp.css";

function AuthenticatedApp({ user, logout }) {
  return (
    <div className="main-container">
      <div className="navlink-container">
        <Link to="/" className="navlink-explore">
          Explore
        </Link>
      </div>
      <main className="content-container">
        <AppRoutes />
      </main>
      <div className="user-options">
        <p className="username">{user}</p>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/:publishedAt" element={<Show />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default AuthenticatedApp;
