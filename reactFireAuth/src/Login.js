import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from './base';
import { AuthContext } from './Auth';

const Login = () => {
  return (
    <>
      <button onClick={() => app.auth().signIn()}>Log in</button>
    </>
  )
}

export default Login;