import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import loginImage from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState('');
  const { registerUser, isLoading } = useAuth();

  // history
  const history = useHistory();
  // handle on submit register from
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      setError(`Password didn't match !`);
      return;
    }
    // register user with email and password
    registerUser(loginData.email, loginData.password, loginData.name, history);
    setError('');
  };

  // handle on blur every input field
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
    console.log(field, value);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Box>
              <Typography variant="h6">Register </Typography>
              <form onSubmit={handleLogin}>
                <TextField
                  sx={{ width: '78%', my: '10px' }}
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                  type="text"
                  name="name"
                  onBlur={handleBlur}
                />
                <TextField
                  sx={{ width: '78%', my: '10px' }}
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                />
                <TextField
                  sx={{ width: '78%', my: '10px' }}
                  id="standard-basic"
                  label="Your Password"
                  variant="standard"
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                />
                <TextField
                  sx={{ width: '78%', my: '10px' }}
                  id="standard-basic"
                  label="Re-Type Password"
                  variant="standard"
                  type="password"
                  name="password2"
                  onBlur={handleBlur}
                />
                <Typography variant="body1" style={{ color: 'red' }}>
                  {error}
                </Typography>
                <Typography variant="body1" style={{ color: 'red' }}>
                  {error}
                </Typography>
                <Button
                  sx={{
                    display: 'block',
                    width: '78%',
                    mx: 'auto',
                    my: '20px',
                  }}
                  variant="contained"
                  type="submit"
                >
                  Register
                </Button>
                <NavLink to="/login">
                  <Button
                    variant="text"
                    style={{
                      textDecoration: 'none',
                      textTransform: 'capitalize',
                    }}
                  >
                    Already Registered ? Please Login
                  </Button>
                </NavLink>
              </form>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={loginImage} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
