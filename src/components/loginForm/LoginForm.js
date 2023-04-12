function LoginForm({ onSubmit, buttonText, error }) {

  function handleSubmit(e) {
    e.preventDefault()
    const {username, password} = e.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
      {error ? error : null}
    </form>
  );
}

export default LoginForm;
