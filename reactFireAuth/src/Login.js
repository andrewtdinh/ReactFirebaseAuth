import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from './base';
import { AuthContext } from './Auth';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <button onClick={() => app.auth().signIn()}>Log in</button>
    </>
  )
}

export default Login;