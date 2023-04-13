import "./LoginForm.css";

function LoginForm({ onSubmit, buttonText, error }) {
  function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = e.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="username-container">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="password-container">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="submit-container">
        <button className="submit-btn" type="submit">
          {buttonText}
        </button>
      </div>
      <div className="error-display">{error ? error : null}</div>
    </form>
  );
}

export default LoginForm;
