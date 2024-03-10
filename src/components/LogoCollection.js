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
  'https://res.cloudinary.com/dnvh2fya6/image/upload/v1710021947/majs-tech/aws-logo-cnv_wwptp4.png',
  'https://res.cloudinary.com/dnvh2fya6/image/upload/v1710021947/majs-tech/gcp-logo-cnv_sibg2c.png',
  'https://res.cloudinary.com/dnvh2fya6/image/upload/v1710021947/majs-tech/azure-logo-cnv_tg3mor.png',
];

const awslogoStyle = {
  width: '190px',
  height: '250px',
  margin: '0 70px',
};

const gcplogoStyle = {
  width: '240px',
  height: '250px',
  margin: '0 70px',
}

const azurelogoStyle = {
  width: '240px',
  height: '250px',
  margin: '0 70px',
}

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

//   return (
//     <Box id="logoCollection" sx={{ py: 4 }}>
//       {/* <Typography
//         component="p"
//         variant="subtitle2"
//         align="center"
//         color="text.secondary"
//       >
//         Trusted by the best companies
//       </Typography> */}
//       <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.7 }}>
//         {logos.map((logo, index) => (
          
//           <Grid item key={index}>
            
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


return (
  <Box id="logoCollection" sx={{ py: 1 }}> 
    <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.9 }}>
    <img
              src='https://res.cloudinary.com/dnvh2fya6/image/upload/v1710021947/majs-tech/aws-logo-cnv_wwptp4.png'
              alt=''
              style= {awslogoStyle}
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
)

}