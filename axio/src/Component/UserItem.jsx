import React from 'react';

const UserItem = ({ user, deleteUser, handleEditClick }) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <button onClick={() => handleEditClick(user)}>Edit</button>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </div>
  );
};

export default UserItem;
