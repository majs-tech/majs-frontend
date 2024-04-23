import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

function AppAppBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Box
        sx={{
          borderRadius: "1px",
          overflow: "hidden",
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            boxShadow: 0,
            bgcolor: "transparent",
            backgroundImage: "none",
            mt: 2,
            borderRadius: "1px",
          }}
        >
          <Container>
            <Toolbar
              variant="regular"
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
                borderRadius: "20px",
                bgcolor:
                  theme.palette.mode ==="rgba(255, 255, 255, 0.4)",
                width: "100%",
                backdropFilter: "blur(20px)",
                maxHeight: 50,
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
              })}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  ml: "-18px",
                  p: 2,
                }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src="https://res.cloudinary.com/dnvh2fya6/image/upload/v1709996757/majs-tech/nav_logo_t9nfft.png"
                    style={logoStyle}
                    alt=""
                  />
                </Link>

                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <MenuItem
                    //onClick={() => scrollToSection('features')}
                    sx={{ py: "6px", px: "15px" }}
                  >
                    <Typography variant="body2" color="text.primary">
                      <Link
                        to="/product"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Deploy
                      </Link>
                    </Typography>
                  </MenuItem>
                  {/* <MenuItem
                    //onClick={() => scrollToSection('features')}
                    sx={{ py: "6px", px: "15px" }}
                  >
                    <Typography variant="body2" color="text.primary">
                      <Link
                        to="/copilot"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Copilot
                      </Link>
                    </Typography>
                  </MenuItem> */}
                  {/* <MenuItem
                    //onClick={() => scrollToSection('highlights')}
                    sx={{ py: "6px", px: "12px" }}
                  >
                    <Typography variant="body2" color="text.primary">
                      <Link
                        to="/docs"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Docs
                      </Link>
                    </Typography>
                  </MenuItem> */}
                  <MenuItem
                    //onClick={() => scrollToSection('faq')}
                    sx={{ py: "6px", px: "12px" }}
                  >
                    <Typography variant="body2" color="text.primary">
                      <Link
                        to="/terms"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Terms & Conditions
                      </Link>
                    </Typography>
                  </MenuItem>
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 0.5,
                  alignItems: "center",
                }}
              >
                <Button
                  className="bg-black"
                  color="primary"
                  variant="text"
                  size="small"
                  component="a"
                  target="_blank"
                >
                  <Link
                    to="/signin"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Sign In
                  </Link>
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  component="a"
                  target="_blank"
                >
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Sign Up
                  </Link>
                </Button>
              </Box>
              <Box sx={{ display: { sm: "", md: "none" } }}>
                <Button
                  variant="text"
                  color="primary"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ minWidth: "30px", p: "4px" }}
                >
                  <MenuIcon />
                </Button>
                <Drawer
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{
                      minWidth: "60dvw",
                      p: 2,
                      backgroundColor: "background.paper",
                      flexGrow: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        flexGrow: 1,
                      }}
                    ></Box>
                    <MenuItem>
                      <Link
                        to="/product"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Deploy
                      </Link>
                    </MenuItem>
                    {/* <MenuItem>
                      <Link
                        to="/copilot"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Copilot
                      </Link>
                    </MenuItem> */}
                    {/* <MenuItem>
                      <Link
                        to="/docs"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Docs
                      </Link>
                    </MenuItem> */}
                    <MenuItem>
                      <Link
                        to="/pricing"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Pricing
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/terms"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Terms & Conditions
                      </Link>
                    </MenuItem>
                    <Divider />
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      target="_blank"
                      sx={{ width: "100%", marginTop: "20px" }}
                    >
                      <Link
                        to="/signup"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Sign Up
                      </Link>
                    </Button>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      target="_blank"
                      sx={{ width: "100%", marginTop: "20px" }}
                    >
                      <Link
                        to="/signin"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Sign In
                      </Link>
                    </Button>
                  </Box>
                </Drawer>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
