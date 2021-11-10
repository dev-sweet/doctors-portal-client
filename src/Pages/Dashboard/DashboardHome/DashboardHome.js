import React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';
const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacaing={2}>
      <Grid item md={6} xs={8}>
        <Calender date={date} setDate={setDate} />
      </Grid>
      <Grid item md={6} xs={4}>
        <Appointments date={date} />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
