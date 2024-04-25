import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
const useStyles = makeStyles((theme) => ({
  logo: {
    width: "200px",
    height: "auto",
  },
  title: {
    width: "350px",
    textAlign: "center",
    paddingBottom: "20px",
  },
  formBox: {
    my: 8,
    mx: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0px 95px 0px 95px",

    [theme.breakpoints.down("sm")]: {
      margin: "0px 30px 0px 30px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0px 95px 0px 95px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0px 95px 0px 95px",
    },
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage:
            "url(https://res.cloudinary.com/dnvh2fya6/image/upload/v1710107813/majs-tech/canva101_xax6ph.png)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) => (t.palette.mode = t.palette.grey[900]),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={6} elevation={6} square>
        <Box className={classes.formBox}>
          <img
            className={classes.logo}
            src="https://res.cloudinary.com/dnvh2fya6/image/upload/v1709996741/majs-tech/footerlogo_r14blu.png"
            sx={{ m: 1, bgcolor: "secondary.main", width: "2000px" }}
            alt=""
          />

          <Typography component="h1" variant="h5" className={classes.title}>
            Welcome back to majs.tech!
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              
              <Grid item>
                <a href="/signup" variant="body2">
                  Don't have an account? Sign Up
                </a>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ mt: 5 }} /> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
