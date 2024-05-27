// components/Footer.js
import React from 'react';
import { Paper, Typography, Link, Box, Grid } from '@mui/material';

const Footer = () => (
  <Grid item xs={12}>
    <Paper id="contact" sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ color: '#fff' }}>Contact Information</Typography>
      <Box sx={{ marginTop: '1rem' }}>
        <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" sx={{ color: '#90caf9', marginRight: '1rem' }}>LinkedIn</Link>
        <Link href="https://github.com/yourprofile" target="_blank" sx={{ color: '#90caf9', marginRight: '1rem' }}>GitHub</Link>
        <Link href="mailto:youremail@example.com" sx={{ color: '#90caf9' }}>Email</Link>
      </Box>
    </Paper>
  </Grid>
);

export default Footer;
