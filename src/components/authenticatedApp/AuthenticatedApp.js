import { useState, useRef } from 'react';

function AuthenticatedApp() {

  const [query, setQuery] = useState('')
  const inputRef = useRef()

  console.log(query)

  return ( 
    <>
      <div>
        <label htmlFor='query'>Search: </label>
        <input type="text" id="query" ref={inputRef}/>
        <button onClick={(e) => setQuery(inputRef.current.value)}>Go</button>
      </div>
    </>
   );
}

export default AuthenticatedApp;
