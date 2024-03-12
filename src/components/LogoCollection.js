import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import { Container } from '@mui/material';

const whiteLogos = [
  'https://res.cloudinary.com/dnvh2fya6/image/upload/v1710021947/majs-tech/aws-logo-cnv_wwptp4.png',
  'https://res.cloudinary.com/dnvh2fya6/image/upload/v1710021947/majs-tech/gcp-logo-cnv_sibg2c.png',
  'https://res.cloudinary.com/dnvh2fya6/image/upload/v1710021947/majs-tech/azure-logo-cnv_tg3mor.png',
];

const darkLogos = [
  'https://res.cloudinary.com/dnvh2fya6/image/upload/v1710145468/majs-tech/aws-new_pxfxgu.png',
  'https://res.cloudinary.com/dnvh2fya6/image/upload/v1710021947/majs-tech/gcp-logo-cnv_sibg2c.png',
  'https://res.cloudinary.com/dnvh2fya6/image/upload/v1710021947/majs-tech/azure-logo-cnv_tg3mor.png',
];


const awslogoStyle = {
  width: '150px', // Adjust the width as needed
  height: '150px', // Adjust the height as needed
  margin: '0 70px',
};

const gcplogoStyle = {
  width: '290px', // Adjust the width as needed
  height: '300px', // Adjust the height as needed
  margin: '0 70px',
};

const azurelogoStyle = {
  width: '290px', // Adjust the width as needed
  height: '300px', // Adjust the height as needed
  margin: '0 70px',
};

export default function LogoCollection() {
  return (
    <Box id="logoCollection" sx={{ py: 1 }}>
      <Grid container justifyContent="center" alignItems="center" sx={{ mt: 0.5, opacity: 1, display: 'flex' }}>
        <img
          src='https://res.cloudinary.com/dnvh2fya6/image/upload/v1710021947/majs-tech/aws-logo-cnv_wwptp4.png'
          alt=''
          style={awslogoStyle}
        />
        <img
          src='https://res.cloudinary.com/dnvh2fya6/image/upload/v1710021947/majs-tech/gcp-logo-cnv_sibg2c.png'
          alt=''
          style={gcplogoStyle}
        />
        <img
          src='https://res.cloudinary.com/dnvh2fya6/image/upload/v1710021947/majs-tech/azure-logo-cnv_tg3mor.png'
          alt=''
          style={azurelogoStyle}
        />
      </Grid>
    </Box>
  );
}
