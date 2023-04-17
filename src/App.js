import "./App.css";
import { useState, useEffect } from "react";
import UnauthenticatedApp from "./components/unauthenticatedApp/UnauthenticatedApp";
import AuthenticatedApp from "./components/authenticatedApp/AuthenticatedApp";
import { BrowserRouter as Router } from "react-router-dom";
import * as auth from "./utils/auth-provider";

async function getUser() {
  let user = null;

  const token = await auth.getToken();
  if (token) {
    user = window.localStorage.getItem("user");
  }
  return user;
}

function App() {
  const [user, setUser] = useState(null);

  console.log(`State User: ${user}`);

  useEffect(() => {
    getUser().then((u) => setUser(u));
  }, []);

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
    window.localStorage.setItem("user", form.username);
    auth
      .login(reqResLogin)
      .then((token) => console.log(`Successful login: ${token}`));
  };

  const register = (form) => {
    //Same from above in here
    setUser(form.username);
    window.localStorage.setItem("user", form.username);
    auth
      .register(reqResRegister)
      .then((token) => console.log(`Successful register: ${token}`));
  };

  const logout = () => {
    auth.logout();
    setUser(null);
    console.log("Successful logout");
  };

  return (
    <div className="App">
      {user ? (
        <Router>
          <AuthenticatedApp user={user} logout={logout} />
        </Router>
      ) : (
        <UnauthenticatedApp login={login} register={register} />
      )}
    </div>
  );
}

export default App;
