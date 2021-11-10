import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Services from '../Services/Services';
const Home = () => {
  return (
    <>
      <Navigation />
      <Services />
      <AppointmentBanner />
    </>
  );
};

export default Home;
