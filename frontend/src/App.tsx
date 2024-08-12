import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import logo from './logo.svg';

function App() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My Portfolio - Kushagra Bharti
        </Typography>
        <Typography variant="body1">
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mt: 3 }}
        >
          Learn React
        </Button>
      </Box>
    </Container>
  );
}

export default App;
