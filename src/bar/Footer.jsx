// src/Footer.js

import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Logo from '../components/Assets/Me.jpg'; // Replace with your logo path

const AnimatedIcon = styled(IconButton)({
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: 4,
        position: 'relative',
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={12} sm={4}>
          <Box display="flex" alignItems="center" justifyContent="flex-start">
            <AnimatedIcon>
              <PhoneIcon style={{ color: 'white' }} />
            </AnimatedIcon>
            <Typography variant="body2" sx={{ marginLeft: 1 }}>
              +91 9902891195
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <Typography variant="h6">Follow me</Typography>
          <Box sx={{ marginTop: 1 }}>
            <AnimatedIcon href="https://www.instagram.com/mr.aary_3?igsh=Ymxia2hmejFwYTBq&utm_source=qr" aria-label="Instagram">
              <InstagramIcon style={{ color: 'white' }} fontSize="large" />
            </AnimatedIcon>
            <AnimatedIcon href="https://www.facebook.com/areef.mk.79" aria-label="Facebook">
              <FacebookIcon style={{ color: 'white' }} fontSize="large" />
            </AnimatedIcon>
            <AnimatedIcon href="https://github.com/areef-coder" aria-label="GitHub">
              <GitHubIcon style={{ color: 'white' }} fontSize="large" />
            </AnimatedIcon>
            <AnimatedIcon href="linkedin.com/in/ areef-mk-112551305" aria-label="LinkedIn">
              <LinkedInIcon style={{ color: 'white' }} fontSize="large" />
            </AnimatedIcon>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <AnimatedIcon>
              <EmailIcon style={{ color: 'white' }} />
            </AnimatedIcon>
            <Typography variant="body2" sx={{ marginLeft: 1 }}>
              185areefmk@gmail.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        {/* <img src={Logo} alt="Company Logo" style={{ width: '100px' }} /> */}
        <Typography variant="body2" sx={{ marginTop: 1,color:"black" }}>
          © {new Date().getFullYear()}    ░A░A░R░Y░
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
