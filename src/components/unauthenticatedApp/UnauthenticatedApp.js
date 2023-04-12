import { useState } from "react";
import Modal from "../modal/Modal";
import "./UnauthenticatedApp.css";

function UnauthenticatedApp() {
  const [modal, setModal] = useState("idle");

  const isLogin = modal === "login";
  const isRegister = modal === "register";

  function login(formData) {
    console.log("login", formData);
  }

  function register(formData) {
    console.log("register", formData);
  }

  function close() {
    setModal("idle");
  }

  return (
    <div className="unauth-container">
      <h1>News</h1>
      <div>
        <button onClick={() => setModal("login")}>Login</button>
        <button onClick={() => setModal("register")}>Register</button>
      </div>
      {isLogin ? (
        <Modal onSubmit={login} buttonText="Login" close={close} />
      ) : isRegister ? (
        <Modal onSubmit={register} buttonText="register" close={close} />
      ) : null}
    </div>
  );
}

export default UnauthenticatedApp;
