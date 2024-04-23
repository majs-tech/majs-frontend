import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
//import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        //backgroundImage: `url("https://res.cloudinary.com/dnvh2fya6/image/upload/v1712815558/bground_cd3xng.png")`,

        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      })}
    >
      {/* <Spline scene="https://prod.spline.design/EyZlzXxKBZvsXOMb/scene.splinecode" /> */}
      <Container
        sx={{
          //backgroundImage: `url("https://res.cloudinary.com/dnvh2fya6/image/upload/v1712815558/bground_cd3xng.png")`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          // backgroundImage: `url("https://res.cloudinary.com/dnvh2fya6/image/upload/v1710138230/majs-tech/Untitled_design_1_f2h9at.png")`,
        }}
      >
        <Stack spacing={3} useFlexGap sx={{ width: { xs: "90%", sm: "90%" } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Empower Your Projects with Effortless Cloud Deployment.
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            ></Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            Start your journey to hassle-free cloud deployment and elevate your
            projects with just a click.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 5, width: { xs: "100%", sm: "auto" } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autocomplete: "off",
                ariaLabel: "Enter your email address",
              }}
            />
            <Button href="/signup" variant="contained" color="primary">
              Start for free
            </Button>
          </Stack>
          <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            By clicking &quot;Start for free&quot; you agree to our&nbsp;
            <Link href="/terms" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
