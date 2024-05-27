// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import Link from 'next/link';

const Navbar = () => (
  <AppBar position="static" sx={{  borderRadius: '10px', height: '60px', justifyContent: 'center' }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h6" sx={{ color: '#90caf9', display: 'flex', alignItems: 'center' }}>
        <img src="./—Pngtree—computer science line icon vector_9034468.png" alt="Logo" style={{ height: '48px', marginRight: '10px', filter: 'invert(100%)'}} />
      </Typography>
      <Box>
        <Button color="inherit" sx={{ color: '#E0E1DD', marginRight: '1rem' }}>
          <Link href="/">Home</Link>
        </Button>
        <Button color="inherit" sx={{ color: '#E0E1DD', marginRight: '1rem' }}>
          <Link href="#about">About</Link>
        </Button>
        <Button color="inherit" sx={{ color: '#E0E1DD', marginRight: '1rem' }}>
          <Link href="#skills">Skills</Link>
        </Button>
        <Button color="inherit" sx={{ color: '#E0E1DD', marginRight: '1rem' }}>
          <Link href="#experience">Experience</Link>
        </Button>
        <Button color="inherit" sx={{ color: '#E0E1DD' }}>
          <Link href="#contact">Contact</Link>
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
