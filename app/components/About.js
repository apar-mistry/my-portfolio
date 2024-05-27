// components/EducationSkills.js
import React, { useState } from "react";
import { Paper, Typography, Grid, Tabs, Tab, Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

const About = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleChangeIndex = (index) => {
    setTabIndex(index);
  };

  return (
    <Grid item xs={12} md={6}>
      <Paper id="skills" sx={{ padding: 2, minHeight: "300px" }}>
        <Typography variant="h4" sx={{ color: "#fff", marginBottom: 2 }}>
          About Me!
        </Typography>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Hey There" />
          <Tab label="Me In 3!" />
          <Tab label="Hobbies" />
        </Tabs>
        <SwipeableViews
          index={tabIndex}
          onChangeIndex={handleChangeIndex}
          enableMouseEvents
          style={{ overflowX: "hidden", padding: "0 24px" }}
        >
          <Box sx={{ padding: 2 }}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Typography variant="body1" sx={{ color: "#b0bec5" }}>
                  22 Year old Computer Science student at UCR.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ color: "#b0bec5" }}>
                  I'm a passionate developer who loves to code and build things
                  that make a difference.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ color: "#b0bec5" }}>
                  I'm always looking for new opportunities to learn and grow.
                </Typography>
              </li>
            </ul>
          </Box>
          <Box
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: "#b0bec5", alignContent: "center" }}
            >
              🏂 👨‍💻 ☕
            </Typography>
          </Box>
          <Box
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ color: "#b0bec5" }}>
              Certifications: Information on certifications you've earned...
            </Typography>
          </Box>
        </SwipeableViews>
      </Paper>
    </Grid>
  );
};

export default About;
