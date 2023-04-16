import "./App.css";
import { useState } from "react";
import UnauthenticatedApp from "./components/unauthenticatedApp/UnauthenticatedApp";
import AuthenticatedApp from "./components/authenticatedApp/AuthenticatedApp";
import * as auth from "./utils/auth-provider";

function App() {
  const [user, setUser] = useState(null);

  const login = (form) => {
    auth.login(form).then((u) => setUser(u));
  };

  const register = (form) => {
    auth.register(form).then((u) => setUser(u));
  };

  const logout = () => {
    auth.logout();
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <AuthenticatedApp user={user} logout={logout} />
      ) : (
        <UnauthenticatedApp login={login} register={register}/>
      )}
    </div>
  );
}

export default App;
