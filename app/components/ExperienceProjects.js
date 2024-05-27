// components/Experience.js
import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemSecondaryAction,
} from "@mui/material";

const ExperienceProjects = () => (
  <Grid item xs={12}>
    <Paper id="experience" sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ color: "#fff", marginBottom: 2 }}>
        Experience
      </Typography>
      {/* Example of an individual experience entry */}
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ color: "#E0E1DD" }}>
            Lead Software Engineer @ Trade Insightfully LLC
          </Typography>
          <List sx={{ color: "#E0E1DD" }}>
            <ListItem>
              Lead engineer overseeing all of Trade Insightfully’s data
              collection and distribution means
            </ListItem>
            <ListItem>
              Combining websocket technologies alongside various GCP API’s
              providing options data to elite traders all over the country
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: "100%",
              maxHeight: 300,
              objectFit: "cover",
              borderRadius: "5px",
            }}
            alt="Options Trading Platform"
            src="${process.env.REACT_APP_PUBLIC_URL}/call-put-options.jpg"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ color: "#E0E1DD" }}>
            Software Engineer @ The Mayo Clinic
          </Typography>
          <List sx={{ color: "#E0E1DD" }}>
            <ListItem>
              Inaugural SWE intern engineer contributing to the Mayo Clinic's Intelligent Care Pathways Team
            </ListItem>
            <ListItem>
              Utilizing the latest in machine learning and AI to provide the best care possible to patients whilst designing optimal full-stack solutions
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: "100%",
              maxHeight: 300,
              objectFit: "cover",
              borderRadius: "5px",
            }}
            alt="Options Trading Platform"
            src="${process.env.REACT_APP_PUBLIC_URL}/NewsNetwork-1920x10802-1.jpg"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ color: "#E0E1DD" }}>
            Software Engineer @ Amelia
          </Typography>
          <List sx={{ color: "#E0E1DD" }}>
            <ListItem>
               Software engineer contributing to Amelia's Mobile Tech Stack
            </ListItem>
            <ListItem>
              Led efforts to refactor Amelia's application to both Native IOS and Android platforms
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: "100%",
              maxHeight: 300,
              objectFit: "cover",
              borderRadius: "5px",
            }}
            alt="Options Trading Platform"
            src="${process.env.REACT_APP_PUBLIC_URL}/7151925-c5870015fba3af28c71feb0d0b84433f-medium_jpg.jpg"
          />
        </Grid>
      </Grid>
    </Paper>
  </Grid>
);

export default ExperienceProjects;
