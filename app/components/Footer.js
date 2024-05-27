
import React from 'react';
import { Paper, Typography, Link, Box, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => (
  <Grid item xs={12}>
    <Paper id="contact" sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ color: '#fff' }}>Contact Me!</Typography>
      <Box sx={{ marginTop: '1rem' }}>
        <Link href="https://www.linkedin.com/in/apar-mistry" target="_blank" sx={{ color: '#90caf9', marginRight: '1rem' }}>
          <LinkedInIcon sx={{ fontSize: '2rem' }} />  
        </Link>
        <Link href="https://github.com/apar-mistry" target="_blank" sx={{ color: '#90caf9', marginRight: '1rem' }}>
          <GitHubIcon sx={{ fontSize: '2rem' }} />  
        </Link>
        <Link href="mailto:aparmistry0518@gmail.com" sx={{ color: '#90caf9' }}>
          <EmailIcon sx={{ fontSize: '2rem' }} />  
        </Link>
      </Box>
    </Paper>
  </Grid>
);

export default Footer;
