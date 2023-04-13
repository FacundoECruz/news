import { useState, useRef, useEffect } from "react";
import { client } from "../../utils/api-client";
import LoadingCircles from "../loading/LoadingSpinner";
import "./DiscoverNewsScreen.css";

function DiscoverNewsScreen() {
  const [query, setQuery] = useState("");
  const [queried, setQueried] = useState(false);
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  const inputRef = useRef();

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  useEffect(() => {
    if (!queried) {
      return;
    }
    setStatus("loading");
    client(`everything?q=${encodeURIComponent(query)}`).then((responseData) => {
      setData(responseData);
      setStatus("success");
    });
  }, [query, queried]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    setQueried(true);
    setQuery(inputRef.current.value);
  }

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
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

export default DiscoverNewsScreen;
