import { useRef } from "react";
import LoadingCircles from "../loading/LoadingSpinner";
import "./NavBar.css";

function NavBar({ onSubmit, status, user, logout }) {
  const inputRef = useRef();

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputRef.current.value);
  }

  return (
    <div className="navbar-container">
      <form onSubmit={handleSubmit}>
        <div className="search-bar-container">
          <label htmlFor="query">Search </label>
          <input type="text" id="query" ref={inputRef} />
          {isLoading ? (
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
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
