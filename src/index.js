import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import { UserContextProvider } from './contexts/UserContextProvider';
import Users from './containers/Users';

const App = () => (
  <UserContextProvider>
    <Users />
  </UserContextProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
