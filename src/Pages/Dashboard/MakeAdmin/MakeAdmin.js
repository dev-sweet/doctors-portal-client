import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const { token } = useAuth();
  const handleBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch('http://localhost:5000/users/admin', {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>Make an Admin</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          onBlur={handleBlur}
          variant="standard"
          label="Email"
        ></TextField>
        <br />
        <br />
        <Button variant="contained" type="submit">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
