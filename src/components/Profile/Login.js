import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-page">
        <h2 className="login-heading">Login </h2>
        <form className="login-form">
          <input type="text" placeholder="username" />
          <br />
          <input type="password" placeholder="password" />
          <br /> <br />
          <label className="login-remember">
            Remember me
            <input type="checkbox" />
          </label>
          <br /> <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
