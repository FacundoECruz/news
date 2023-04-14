import SearchBar from "../searchBar/SearchBar";
import NewsRow from "../newsRow/NewsRow";
import { useState, useEffect } from 'react';
import { client } from "../../utils/api-client";

function AuthenticatedApp() {

  const [query, setQuery] = useState("");
  const [queried, setQueried] = useState(false);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  
  console.log(data)

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

  function handleSearchSubmit(query) {
    setQueried(true);
    setQuery(query)
  }

  return(
      <>
        <SearchBar onSubmit={handleSearchSubmit} status={status}/>
        {
          data ? data.articles.map((n, i) => {
            return <NewsRow key={i} data={data.articles[i]}/> 
          }) : null
        }
      </>
    ) 
}

export default AuthenticatedApp;
