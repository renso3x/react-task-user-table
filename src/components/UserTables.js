import React, { useContext } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

const UserTables = ({ users }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name </th>
          <th>Gender</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

UserTables.propTypes = {
  users: PropTypes.array,
};

export default UserTables;
