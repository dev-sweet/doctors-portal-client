import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
const AppointmentBanner = () => {
  const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 71, 102, 0.77)',
    marginTop: '150px',
    backgroundBlendMode: 'darken',
  };
  return (
    <div>
      <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <img
              src={doctor}
              style={{ width: '600px', marginTop: '-159px' }}
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifycontent: 'center',
              textAlign: 'left',
            }}
          >
            <Box>
              <Typography variant="h5" style={{ color: '#32C7E3' }}>
                Appointment
              </Typography>
              <Typography variant="h3" style={{ color: 'white' }}>
                Make an appointment today
              </Typography>
              <Typography
                variant="h6"
                style={{ color: '#f2f2f2', fontSize: '14px' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                architecto nobis vero delectus itaque nam, consectetur tempore
                qui eligendi laboriosam facere quod, quia impedit nemo.
              </Typography>
              <Button variant="contained">Contained</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AppointmentBanner;
