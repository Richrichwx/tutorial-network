import React from 'react';
import styled from 'styled-components';

const MusicContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  padding: 20px 0;
`;

class Login extends React.Component {
  render() {
    return (
      <MusicContainer>
        <h1>Login</h1>
        <form>
          <div>
            <input type="text" placeholder="Login"/>
          </div>
          <div>
            <input type="text" placeholder="Password"/>
          </div>
          <div>
            <input type="checkbox"/>
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </MusicContainer>
    )
  }
}

export default Login;