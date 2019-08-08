import React from 'react';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" placeholder="Login"/>
          </div>
          <div>
            <input type="text" placeholder="Password"/>
          </div>
          <div>
            <input type="checkbox"/> Remember me
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm;