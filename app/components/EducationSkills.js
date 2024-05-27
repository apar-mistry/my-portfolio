// components/EducationSkills.js
import React, { useState } from 'react';
import { Paper, Typography, Grid, Tabs, Tab, Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';

const EducationSkills = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleChangeIndex = index => {
    setTabIndex(index);
  };

  return (
    <Grid item xs={12} md={6}>
      <Paper id="skills" sx={{ padding: 2, minHeight: '300px' }}>
        <Typography variant="h4" sx={{ color: '#fff', marginBottom: 2 }}>Education & Skills</Typography>
        <Tabs value={tabIndex} onChange={handleChange} indicatorColor="primary" textColor="inherit" variant="fullWidth">
          <Tab label="Education" />
          <Tab label="Skills" />

        </Tabs>
        <SwipeableViews
          index={tabIndex}
          onChangeIndex={handleChangeIndex}
          enableMouseEvents
          style={{ overflowX:'hidden',   padding: '0 24px' }}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1" sx={{ color: '#b0bec5' }}>
              Academic History: Details about your academic background...   
            </Typography>
          </Box>
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1" sx={{ color: '#b0bec5' }}>
              Skills: List of your professional skills...
            </Typography>
          </Box>
        </SwipeableViews>
      </Paper>
    </Grid>
  );
};


export default EducationSkills;
