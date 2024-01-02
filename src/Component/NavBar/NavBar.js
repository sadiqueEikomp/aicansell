import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Logo from "../../Asset/Logo/Logo.png";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const LogoutBox = styled(Box)({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
});

const LogoutText = styled(Typography)({
  marginRight: '38px',
  color: "#FFF",

  fontFamily: "Poppins",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "normal",
});

const BlackBackgroundAppBar = styled(AppBar)(({ theme }) => ({
    background: "linear-gradient(180deg, #2241D5 0%, rgba(32, 15, 37, 0.00) 100%)",
    
  boxShadow: '0px 4px 11px 0px rgba(255, 255, 255, 0.25)',
}));

const CustomIconButton = styled(IconButton)({
  backgroundImage: `linear-gradient(90deg, #1a237e, #283593, #1a237e, #1f272d, #0a0a0a)`,
  WebkitBackgroundClip: 'text',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

const LogoImage = styled('img')({
  width: '100px',
  height: '40px',
  marginRight: '10px',
});

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BlackBackgroundAppBar position="static">
        <Toolbar>
          <LogoImage src={Logo} alt="AicanSell Logo" />
          <LogoutBox>
            {/* LogOut Button */}
            <LogoutText sx={{ marginRight: '38px' }}>Scenario</LogoutText>
            <LogoutText sx={{ marginRight: '8px' }}>Dashboard</LogoutText>
           
            
            {/* Login Button */}
           
           
          </LogoutBox>
        </Toolbar>
      </BlackBackgroundAppBar>
    </Box>
  );
};

export default Navbar;
