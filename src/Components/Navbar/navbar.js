import React , {useState} from "react";
import { AppBar, Button, Tab, Tabs } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./navbar.css";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Siyah renk
    },
  },
});

const Navbar = () => {
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <React.Fragment>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <img class="logo" src="/image/logo.png" alt="logo" />
          <Typography sx={{color : "black", fontWeight: 'bold', fontSize: '1.2rem', fontStyle: 'italic', fontFamily: 'cursive' }}>YALÇIN HALI MOBİLYA</Typography>
          <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="secondary" sx={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: 'auto',
          }}>
          <Tab label="Products"/>
          <Tab label="Contact Us"/>
          <Tab label="About Us"/>
          </Tabs>

          <Button id="button1" variant="contained">Login</Button>
          <Button id="button2" variant="contained">SignUp</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default Navbar;
