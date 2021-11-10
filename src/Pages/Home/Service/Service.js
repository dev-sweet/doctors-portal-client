import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <>
      <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
          <CardMedia
            component="img"
            height="140"
            style={{ width: 'auto', height: '80px', margin: 'auto' }}
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              color="text.secondary"
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Service;
