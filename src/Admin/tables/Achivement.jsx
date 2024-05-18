import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
});

const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
});

const Achivement = () => {
  const theme = useTheme();
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png';

  const handleClick = () => {
    navigate('/admin/product/create'); // Navigate to the ProductsTable page
  };

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6' sx={{ letterSpacing: '0.25px' }}>
          TRENDLY
        </Typography>
        <Typography variant='body2'>Congratulations 🥳</Typography>

        <Typography variant='h5' sx={{ my: 3.1, color: 'primary.main' }}>
          Add Products
        </Typography>
        {/* Attach the handleClick function to the onClick event of the button */}
        <Button size='small' variant='contained' onClick={handleClick}>
          Click here
        </Button>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
      </CardContent>
    </Card>
  );
};

export default Achivement;
