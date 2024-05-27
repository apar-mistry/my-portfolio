import React from 'react';
import { Container, Typography } from '@mui/material';
import styles from '../styles/Extracurriculars.module.css';

const Extracurriculars = () => {
  return (
    <div id="extracurriculars" className={styles.extracurriculars}>
      <Container>
        <Typography variant="h4">Extracurriculars</Typography>
        <Typography variant="body1">Volunteer at DEF Organization...</Typography>
        <Typography variant="body1">Member of Coding Club...</Typography>
      </Container>
    </div>
  );
};

export default Extracurriculars;
