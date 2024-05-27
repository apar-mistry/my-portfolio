// app/page.js
"use client"
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxHero from './components/ParallaxHero';
import Hero from './components/Hero';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import Experience from './components/ExperienceProjects';
import Footer from './components/Footer';
import CustomThemeProvider from './theme';
import Navbar from './components/Navbar';
import { Grid } from '@mui/material';
import BokehBackground from './components/BokehBackground';


const HomePage = () => (
  <CustomThemeProvider>
    <Navbar />
    <BokehBackground/>
    <Grid container spacing={2}>
      <Hero />
      <About />
      <EducationSkills />
      <Experience />
      <Footer />
    </Grid>
  </CustomThemeProvider>
);

export default HomePage;
