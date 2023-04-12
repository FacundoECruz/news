import { useState } from "react";
import Modal from "../modal/Modal";
import "./UnauthenticatedApp.css";

function UnauthenticatedApp() {
  const [modal, setModal] = useState("idle");
  const [error, setError] = useState(null);

  const isLogin = modal === "login";
  const isRegister = modal === "register";

  const handleData = (formData) => {
    const username = formData.username;
    const password = formData.password;
    if (username === "" || password === "") {
      return {error: "Please complete all fields"}
    }
    return {username, password}
  }

  function login(formData) {
    const input = handleData(formData)
    if(input.error){
      setError(input.error)
    } else {
      console.log(input)
    }
  }

  function register(formData) {
    const input = handleData(formData)
    if(input.error){
      setError(input.error)
    } else {
      console.log(input)
    }
  }

  function close() {
    setModal("idle");
    setError(null);
  }

  return (
    <div className="unauth-container">
      <h1>News</h1>
      <div>
        <button onClick={() => setModal("login")}>Login</button>
        <button onClick={() => setModal("register")}>Register</button>
      </div>
      {isLogin ? (
        <Modal
          onSubmit={login}
          buttonText="Login"
          close={close}
          error={error}
        />
      ) : isRegister ? (
        <Modal
          onSubmit={register}
          buttonText="Register"
          close={close}
          error={error}
        />
      ) : null}
    </div>
  );
}

export default UnauthenticatedApp;
