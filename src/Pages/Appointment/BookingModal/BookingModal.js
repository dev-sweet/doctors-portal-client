import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const BookingModal = ({
  open,
  handleClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { name, time } = booking;
  const { user } = useAuth();

  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: '',
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newInfo = { ...bookingInfo };
    newInfo[field] = value;

    setBookingInfo(newInfo);
  };

  // handle submiting appointemnt form
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };

    fetch('http://localhost:5000/appointments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setBookingSuccess(true);
        }
      });

    // close modal
    handleClose();
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleBookingSubmit}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h5"
            sx={{ marginTop: '10px' }}
            style={{ textAlign: 'center' }}
          >
            {name}
          </Typography>
          <TextField
            id="outlined-basic"
            value={time}
            disabled
            variant="outlined"
            sx={{ marginTop: '10px' }}
            style={{ width: '100%' }}
          />
          <TextField
            id="outlined-basic"
            label="Your Name"
            name="patientName"
            onBlur={handleOnBlur}
            defaultValue={user.displayName}
            variant="outlined"
            sx={{ marginTop: '10px' }}
            style={{ width: '100%' }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            onBlur={handleOnBlur}
            defaultValue={user.email}
            variant="outlined"
            sx={{ marginTop: '10px' }}
            style={{ width: '100%' }}
          />

          <TextField
            id="outlined-basic"
            label="Phone Number"
            name="phone"
            onBlur={handleOnBlur}
            variant="outlined"
            sx={{ marginTop: '10px' }}
            style={{ width: '100%' }}
          />

          <TextField
            id="outlined-basic"
            value={date}
            disabled
            variant="outlined"
            sx={{ marginTop: '10px' }}
            style={{ width: '100%' }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: '10px', ml: 'auto' }}
          >
            SUBMIT
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
