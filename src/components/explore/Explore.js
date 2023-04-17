import { useState, useEffect, useRef } from "react";
import { client } from "../../utils/api-client";
import LoadingCircles from "../loading/LoadingSpinner";
import NewsRow from "../newsRow/NewsRow";
import "./Explore.css"

function Explore() {
  const [query, setQuery] = useState("");
  const [queried, setQueried] = useState(false);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const inputRef = useRef();

  console.log(data);

  useEffect(() => {
    if (!queried) {
      return;
    }
    setStatus("loading");
    client(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}`
    ).then((responseData) => {
      setData(responseData);
      setStatus("success");
      inputRef.current.value = ""
    });
  }, [query, queried]);

  function handleSearchSubmit(e) {
    e.preventDefault()
    setQueried(true);
    setQuery(inputRef.current.value);
  }

  return (
    <div className="explore-container">
      <form onSubmit={handleSearchSubmit}>
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
      {status === "success" ? (
        <div className="news-container">
          {data
            ? data.articles.map((n, i) => {
                return <NewsRow key={i} data={data.articles[i]} />;
              })
            : null}
        </div>
      ) : null}
    </div>
  );
}

export default Explore;
