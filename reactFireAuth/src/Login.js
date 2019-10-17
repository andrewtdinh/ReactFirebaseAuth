import React from 'react';
import app from './base';

const Login = () => {
  return (
    <>
      <button onClick={() => app.auth().signIn()}>Log in</button>
    </>
  )
}

export default Login;