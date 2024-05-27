// components/Hero.js
import React from 'react';
import { Grid, Paper, Typography, Button, Box, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['A Web Developer', 'A Problem Solver', 'A Tech Enthusiast', 'A Coffee Lover!'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <Grid item xs={12}>
      <Paper sx={{ padding: 2 }}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Avatar sx={{ width: 100, height: 100 }} alt="Apar Mistry" src="./1602563417439-2.jpeg" />
          </Grid>
          <Grid item>
            <Typography variant="h2" component="h1" sx={{ color: '#fff' }}>
              Apar Mistry
            </Typography>
            <Typography variant="h5" sx={{ color: '#b0bec5' }}>
              {text}
              <Cursor />
            </Typography>
          </Grid>
        </Grid>

      </Paper>
    </Grid>
  );
};

export default Hero;
