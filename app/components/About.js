// components/EducationSkills.js
import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const EducationSkills = () => (
  <Grid item xs={12} md={6}>
    <Paper id="skills">
      <Typography variant="h4" sx={{ color: '#fff' }}>About Me!</Typography>
      <Typography variant="body1" sx={{ color: '#b0bec5', marginTop: '1rem' }}>
        List of academic history, skills, etc...
      </Typography>
    </Paper>
  </Grid>
);

export default EducationSkills;
