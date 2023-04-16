import "./App.css";
import { useState } from "react";
import UnauthenticatedApp from "./components/unauthenticatedApp/UnauthenticatedApp";
import AuthenticatedApp from "./components/authenticatedApp/AuthenticatedApp";
import Show from "./components/Show/Show"

function App() {
  const [app, setApp] = useState("show");

  const unauth = app === "unauth"
  const explore = app === "explore"
  const show = app === "show"

  return (
    <div className="App">
      {explore 
      ? <AuthenticatedApp /> 
      : unauth ? <UnauthenticatedApp />
      : show ? <Show />
      : null}
    </div>
  );
}

export default App;
