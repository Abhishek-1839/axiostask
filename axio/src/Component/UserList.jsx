import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, deleteUser, handleEditClick }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} deleteUser={deleteUser} handleEditClick={handleEditClick} />
      ))}
    </div>
  );
};

export default UserList;
