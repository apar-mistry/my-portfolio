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
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>  {/* Enable disc style for bullets */}
              <li>
                <Typography variant="body" sx={{ color: "#b0bec5" }}> {/* Adjusted variant from h7 to body1 */}
                  22 Year old Computer Science student at UCR.
                </Typography>
              </li>
              <li>
                <Typography variant="body" sx={{ color: "#b0bec5" }}>
                  I'm a passionate developer who loves to code and build things
                  that make a difference.
                </Typography>
              </li>
              <li>
                <Typography variant="body" sx={{ color: "#b0bec5" }}>
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
              height: '100%',  // Make sure the Box fills the available vertical space in the SwipeableView
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: "#b0bec5" }}
            >
              🏂 👨‍💻 ☕
            </Typography>
          </Box>
          <Box sx={{ padding: 3 }}>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>  {/* Enable disc style for bullets */}
              <li>
                <Typography variant="body" sx={{ color: "#b0bec5" }}> {/* Adjusted variant from h7 to body1 */}
                  An avid snowboarder who loves to hit the slopes and chase the pow!!
                </Typography>
              </li>
              <li>
                <Typography variant="body" sx={{ color: "#b0bec5" }}>
                  I love to cook in my free time and try out new recipes from around the world.
                </Typography>
              </li>
              <li>
                <Typography variant="body" sx={{ color: "#b0bec5" }}>
                  Watching and cheering on my favorite sports teams is a must! Go Lakers! 🏀
                </Typography>
              </li>
            </ul>
          </Box>
        </SwipeableViews>
      </Paper>
    </Grid>
  );
};

export default About;
