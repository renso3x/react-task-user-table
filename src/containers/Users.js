import React, { useContext, useState, useEffect } from 'react';

import { UserContext } from '../contexts/UserContextProvider';

import UserTables from '../components/UserTables';
import UserBarChart from '../components/UserBarChart';
import SearchInput from '../components/SearchInput';

const Users = () => {
  const ctx = useContext(UserContext);

  const [state, setState] = useState({
    searchName: '',
  });

  const onSearchName = e => {
    const query = e.target.value;
    setState({ searchName: query });
  };

  const filteredUsers = ctx.users.filter(user => {
    const re = new RegExp(state.searchName, 'g');
    if (user.name.toLowerCase().match(re)) {
      return user;
    }
  });

  return (
    <div className="container">
      <SearchInput value={state.searchName} onChange={onSearchName} />
      <UserTables users={filteredUsers} />
      <UserBarChart users={filteredUsers} />
    </div>
  );
};

export default Users;
