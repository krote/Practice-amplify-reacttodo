import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Amplify, Auth} from 'aws-amplify';
import awsmobile from "./aws-exports";
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsmobile)

const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: true,
  defaultCountyCode: 1,
  signUpField: [
    {
      label: 'User Name',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password'
    }
  ]
}

function signOut(){
  Auth.signOut()
  .then()
  .catch();
}

function App() {
  return (
    <React.Fragment>
      <button onClick={signOut}>Sign out</button>
      <div>
        Hello, World
      </div>
    </React.Fragment>
  );
}

export default withAuthenticator(App, {signUpConfig});
