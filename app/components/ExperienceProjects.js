// components/Experience.js
import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const ExperienceProjects = () => (
  <Grid item xs={12}>
    <Paper id="experience">
      <Typography variant="h4" sx={{ color: '#fff' }}>Experience</Typography>
      <Typography variant="body1" sx={{ color: '#b0bec5', marginTop: '1rem' }}>
        List of work experiences, projects, certifications...
      </Typography>
    </Paper>
  </Grid>
);

export default ExperienceProjects;
