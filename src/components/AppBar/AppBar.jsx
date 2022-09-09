import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import "../AppBar/AppBar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from "C:/Users/ianel/Desktop/CoderHouse/React/libreria/src/assets/buho.png"

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <MenuIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Libreria el Buho  
          </Typography>
          <ShoppingCartIcon/>
          <img classname="logo" src={Logo} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

