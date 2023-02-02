import './App.css';
import React, { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker';
import { Box, Button, Spacer, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "./main.css"
import AllRoutes from './Routes/AllRoutes';
import DashBoard from './Component/DashBoard';

function App() {

  
  return (
    <Box className="App">
      <AllRoutes />
    </Box>
  );
}

export default App;
