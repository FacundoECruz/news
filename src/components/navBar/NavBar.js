import { useRef } from "react";
import LoadingCircles from "../loading/LoadingSpinner";
import "./NavBar.css";

function NavBar({ onSubmit, status, user, logout }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputRef.current.value);
    inputRef.current.value = ""
  }

  return (
    <div className="navbar-container">
      <form onSubmit={handleSubmit}>
        <div className="search-bar-container">
          <label htmlFor="query">Search </label>
          <input type="text" id="query" ref={inputRef} />
          {status === "loading" ? (
            <LoadingCircles />
          ) : (
            <button className="go-btn" type="submit">
              Go
            </button>
          )}
        </div>
      </form>
      <div className="user-options">
        <p className="username">{user}</p>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
