import React, { useState } from "react";
import { Paper, Typography, Grid, Tabs, Tab, Box } from "@mui/material";
import { ImageList, ImageListItem } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

const EducationSkills = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleChangeIndex = (index) => {
    setTabIndex(index);
  };

  // Example list of skills as images
  const itemData = [
    {
      img: `./Python-logo-notext.svg.png`,
      title: "Python",
    },
    {
      img: `./JavaScript-logo.png`,
      title: "React",
    },
    {
      img: `./swift-96x96_2x.png`,
      title: "Node.js",
    },
    // Add more items as needed
  ];

  const itemDataFrameworks = [
    {
      img: `./1*okiCUvTUJLtOqJv1dMzwpA.png`,
      title: "Python",
    },
    {
      img: `./bio-1493755518-02711c2cf037c786ebb844af1328f809.png`,
      title: "React",
    },
    {
      img: `./Angular_full_color_logo.svg.png`,
      title: "Node.js",
    },
  ]

  return (
    <Grid item xs={12} md={6}>
      <Paper id="skills" sx={{ padding: 2, minHeight: "300px" }}>
        <Typography variant="h4" sx={{ color: "#fff", marginBottom: 2 }}>
          Education & Skills
        </Typography>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Education" />
          <Tab label="Programming Languages" />
          <Tab label="Frameworks" />
        </Tabs>
        <SwipeableViews
          index={tabIndex}
          onChangeIndex={handleChangeIndex}
          enableMouseEvents
          style={{ overflowX: "hidden", padding: "0 24px" }}
        >
          <Box
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={`./1200px-UC_Riverside_Highlanders_logo.svg.png`}
              alt="School Logo"
              style={{ width: 75, height: "auto", marginBottom: "1rem" }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#b0bec5", fontWeight: "bold" }}
            >
              University of California, Riverside
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0bec5" }}>
              Major: Computer Science
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0bec5" }}>
              Graduation Date: March 2025
            </Typography>
          </Box>
          <Box sx={{ padding: 2 }}>
            <ImageList cols={3} rowHeight={100}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img src={item.img} alt={item.title} loading="lazy"style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Ensure images are contained without overflow
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          <Box sx={{ padding: 2 }}>
            <ImageList cols={3} rowHeight={100}>
              {itemDataFrameworks.map((item) => (
                <ImageListItem key={item.img}>
                  <img src={item.img} alt={item.title} loading="lazy"style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Ensure images are contained without overflow
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </SwipeableViews>
      </Paper>
    </Grid>
  );
};

export default EducationSkills;
