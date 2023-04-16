import "./App.css";
import { useState } from "react";
import UnauthenticatedApp from "./components/unauthenticatedApp/UnauthenticatedApp";
import AuthenticatedApp from "./components/authenticatedApp/AuthenticatedApp";
import * as auth from "./utils/auth-provider";

function App() {
  const [user, setUser] = useState(null);

  console.log(`State User: ${user}`);

  const reqResLogin = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  const reqResRegister = {
    email: "eve.holt@reqres.in",
    password: "pistol",
  };

  const login = (form) => {
    // Here we need to fake an auth process. So we set the user state
    // with the form data, and then we change the data that's sended to
    // the auth provider reqres.in
    setUser(form.username);
    auth
      .login(reqResLogin)
      .then((token) => console.log(`Successful login: ${token}`));
  };

  const register = (form) => {
    //Same from above in here
    setUser(form.username);
    auth
      .register(reqResRegister)
      .then((token) => console.log(`Successful register: ${token}`));
  };

  const logout = () => {
    auth.logout();
    setUser(null);
    console.log("Successful logout")
  };

  return (
    <div className="App">
      {user ? (
        <AuthenticatedApp user={user} logout={logout} />
      ) : (
        <UnauthenticatedApp login={login} register={register} />
      )}
    </div>
  );
}

export default App;
