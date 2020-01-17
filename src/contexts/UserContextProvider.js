import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext();

export const UserContextProvider = props => {
  const [state, setState] = useState({
    users: [],
  });

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/renso3x/react-task-user-table/master/users.json'
      )
      .then(response => {
        const users = response.data;
        setState({ users: users });
      })
      .catch(e => console.error('Error', e));
  }, []);

  return (
    <UserContext.Provider
      value={{
        users: state.users,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
