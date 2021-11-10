import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
const services = [
  {
    name: 'Flouride Treatment',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore magni, saepe earum laudantium iste repellat deleniti commodi pariatur ullam!',
    img: fluoride,
  },
  {
    name: 'Cavity Filling',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore magni, saepe earum laudantium iste repellat deleniti commodi pariatur ullam!',
    img: cavity,
  },
  {
    name: 'Teeth Whitening',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore magni, saepe earum laudantium iste repellat deleniti commodi pariatur ullam!',
    img: whitening,
  },
];

const Services = () => {
  return (
    <div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            sx={{ mt: 3, mb: 1 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            OUR SERVICES
          </Typography>
          <Typography
            sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}
            variant="h4"
            component="div"
          >
            Services we provide
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service) => (
              <Service key={service.name} service={service} />
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Services;
