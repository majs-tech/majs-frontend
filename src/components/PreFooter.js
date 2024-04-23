import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const logoStyle = {
  width: "140px",
  height: "auto",
};

export default function PreFooter() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{}}>
        <img
          src={
            "https://res.cloudinary.com/dnvh2fya6/image/upload/v1709996741/majs-tech/footerlogo_r14blu.png"
          }
          style={logoStyle}
          alt=""
        ></img>
      </Box>
      <Typography
        component="span"
        variant="h5"
        sx={{
          wordWrap: "break-word",
          color: (theme) =>
            theme.palette.mode === "light" ? "primary.main" : "primary.light",
        }}
      >
        Ready to deploy? Start building with a free account.
        <p>Speak to an expert for your Pro or Enterprise needs.</p>
      </Typography>
      <Button
        href="/signup"
        variant="contained"
        color="primary"
        sx={{
          margin: 5,
        }}
      >
        Start for free
      </Button>
    </Container>
  );
}
