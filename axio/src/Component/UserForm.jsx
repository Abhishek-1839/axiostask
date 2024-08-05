import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, editingUser, cancelEdit }) => {
  const initialFormState = { id: '', name: '', username: '', email: '', address: { city: '' } };
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData(initialFormState);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'city') {
      setFormData({ ...formData, address: { ...formData.address, city: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
    setFormData(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="city" value={formData.address.city} onChange={handleChange} placeholder="City" required />
      <button type="submit">{editingUser ? 'Update' : 'Add'}</button>
      {editingUser && <button type="button" onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

export default UserForm;
