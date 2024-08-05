import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './Component/UserList';
import UserForm from './Component/UserForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addUser = async (user) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const updateUser = async (user) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
      setUsers(users.map((u) => (u.id === user.id ? response.data : u)));
      setEditingUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} cancelEdit={handleCancelEdit} />
      <UserList users={users} deleteUser={deleteUser} handleEditClick={handleEditClick} />
    </div>
  );
}

export default App;
