import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space } = booking;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ py: 5 }} elevation={3}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">{time}</Typography>
          <Typography variant="caption" style={{ display: 'block' }}>
            {space} space available
          </Typography>
          <Button
            style={{ display: 'block', margin: '10px auto' }}
            onClick={handleOpen}
            variant="contained"
          >
            BOOK AN APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={booking}
        open={open}
        date={date}
        setBookingSuccess={setBookingSuccess}
        handleClose={handleClose}
      ></BookingModal>
    </>
  );
};

export default Booking;
