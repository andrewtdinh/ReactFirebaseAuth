import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class App extends React.Component {
  state = {
    isSignedIn: false
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (<div>Signed In!</div>) : (<div>Not Signed In</div>)}
      </div>
    )
  }
}

export default App;
