import { useState } from "react";
import Modal from "../modal/Modal";
import LoginForm from "../LoginForm";

function UnauthenticatedApp() {
  const [dialog, setDialog] = useState("idle");

  const isLogin = dialog === "login";
  const isRegister = dialog === "register";

  function login(formData) {
    console.log("login", formData);
  }

  function register(formData) {
    console.log("register", formData);
  }

  return (
    <>
      <button onClick={() => setDialog("login")}>Login</button>
      <button onClick={() => setDialog("register")}>Register</button>
      <Modal />     
      
    </>
  );
}

export default UnauthenticatedApp;
