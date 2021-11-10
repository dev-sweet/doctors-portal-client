import React, { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { useLocation, useHistory } from 'react-router-dom';
import loginImage from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  // login with email and password
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, history);
  };

  // login with google
  const handleGoogleSignin = () => {
    signInWithGoogle(location, history);
  };

  // on change input filed handler
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6">Login</Typography>
            <form onSubmit={handleLogin}>
              <TextField
                sx={{ width: '78%', my: '10px' }}
                id="standard-basic"
                label="Your Email"
                variant="standard"
                type="email"
                name="email"
                onBlur={handleChange}
              />
              <TextField
                sx={{ width: '78%', my: '10px' }}
                id="standard-basic"
                label="Your Password"
                variant="standard"
                type="password"
                name="password"
                onBlur={handleChange}
              />
              <Button
                sx={{ display: 'block', width: '78%', mx: 'auto', my: '20px' }}
                variant="contained"
                type="submit"
              >
                Login
              </Button>
              <NavLink to="/register">
                <Button
                  variant="text"
                  style={{
                    textDecoration: 'none',
                    textTransform: 'capitalize',
                  }}
                >
                  New User ? Please Register
                </Button>
              </NavLink>
            </form>
            <p>-----------------------------------------</p>
            <Button onClick={handleGoogleSignin} variant="contained">
              Google Signin
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={loginImage} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
