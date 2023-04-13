import "./App.css";
import { useState } from "react";
import UnauthenticatedApp from "./components/unauthenticatedApp/UnauthenticatedApp";
import AuthenticatedApp from "./components/authenticatedApp/AuthenticatedApp";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
