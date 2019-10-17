import React from 'react';
import app from './base';

const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  )
}

export default Home;