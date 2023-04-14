import { useRef } from "react";
import LoadingCircles from "../loading/LoadingSpinner";
import "./SearchBar.css";

function SearchBar({ onSubmit, status }) {

  const inputRef = useRef();

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(inputRef.current.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="search-bar-container">
          <label htmlFor="query">Search: </label>
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
    </div>
  );
}

export default SearchBar;
