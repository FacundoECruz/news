import { useState, useRef, useEffect } from "react";
import { client } from "../../utils/api-client";

function AuthenticatedApp() {

  const [query, setQuery] = useState("")
  const [queried, setQueried] = useState(false)
  const [status, setStatus] = useState("idle")
  const [data, setData] = useState(null);
  const inputRef = useRef()

  console.log(data)

  useEffect(() => {
    if(!queried) {
      return
    }
    setStatus("loading")
    client(`everything?q=${encodeURIComponent(query)}`).then(responseData => {
      setData(responseData)
      setStatus("success")
    })
  }, [query, queried])

  function handleSearchSubmit(e) {
    e.preventDefault()
    setQueried(true)
    setQuery(inputRef.current.value)
  }

  return ( 
    <>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="query">Search: </label>
        <input type="text" id="query" ref={inputRef}/>
        <button type="submit">Go</button>
      </form>
    </>
   );
}

export default AuthenticatedApp;
