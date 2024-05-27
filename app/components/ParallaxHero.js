// components/ParallaxHero.js
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Container, Typography, Button, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const ParallaxHero = () => (
  <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
    <Parallax speed={-20}>
      <Box
        sx={{
          backgroundImage: 'url(/Abstract-Bokeh-Background-Design-Graphics-8650989-1-1-580x387.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </Parallax>
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        padding: '2rem',
      }}
    >
      <Typography variant="h2" component="h1" sx={{ marginBottom: '1rem', color: '#fff' }}>
        Your Name
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: '2rem', color: '#b0bec5' }}>
        A brief description of what you do.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/aparmistry"
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
    </Container>
  </Box>
);

export default ParallaxHero;
