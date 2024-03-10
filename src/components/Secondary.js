import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';


export default function Secondary() {

    return (
        <Box
        id="hero"
        sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(#CEE5FD)'
            : `linear-gradient(#0D0D0D)`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
        })}
        >
        
        <Container
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >

        
        
        <Box
        sx={(theme) => ({
            mt: { xs: 8, sm: 15 },
            alignSelf: 'center',
            height: { xs: 200, sm: 500 },
            width: '100%',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
            theme.palette.mode === 'light'
            ? alpha('#BFCCD9', 0.5)
            : alpha('#9CCCFC', 0.1),
            boxShadow:
            theme.palette.mode === 'light'
            ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
            : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
        })}
        >
        </Box>
        
        <Box
        sx={(theme) => ({
            mt: { xs: 8, sm: 15 },
            alignSelf: 'center',
            height: { xs: 200, sm: 500 },
            width: '100%',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
            theme.palette.mode === 'light'
            ? alpha('#BFCCD9', 0.5)
            : alpha('#9CCCFC', 0.1),
            boxShadow:
            theme.palette.mode === 'light'
            ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
            : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
        })}
        >
        </Box>
        
        
        </Container>
        </Box>
    )
}

