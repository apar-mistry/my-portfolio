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
      <Paper>
        <Avatar sx={{ width: 100, height: 100, marginBottom: '1rem' }} alt="Apar Mistry" src="/1602563417439-2.jpeg" />
        <Typography variant="h2" component="h1" sx={{ marginBottom: '1rem', color: '#fff' }}>
          Apar Mistry
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: '2rem', color: '#b0bec5' }}>
          {text}
          <Cursor />
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/apar-mistry/"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<GitHubIcon />}
            href="https://github.com/yourprofile"
            target="_blank"
          >
            GitHub
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Hero;
