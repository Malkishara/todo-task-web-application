import React from 'react';
import { Typography } from '@mui/material';

const HeaderComponent = () => {
    return (
      <header style={{ textAlign: "center", padding: "5px", background: "#1976d2", color: "white" }}>
        <Typography variant="h4">ToDo Application</Typography>
        <Typography variant="subtitle1">Stay organized with your tasks</Typography>
      </header>
    );
  };

export default HeaderComponent
