import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import lottie from "lottie-web";
import axios from "axios";
import { Container, Button } from "@mui/material";
import { alpha } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AppAppBar from "./AppAppBar";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import deployLottie from "../components/deploy.json";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
}));

const Product = () => {
  const classes = useStyles();

  const [lottieLoaded, setLottieLoaded] = useState(false);

  useEffect(() => {
    if (!lottieLoaded) {
      lottie.loadAnimation({
        container: document.querySelector("#deployLottie"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: deployLottie,
      });
      setLottieLoaded(true); 
    }
  }, [lottieLoaded]); 
  const { register, handleSubmit } = useForm();

  const MakeAPICall = async (data) => {
    try {
      const { accessKey, secretKey, repoLink, projectName } = data;
      const payload = {
        accessKey,
        secretKey,
        repoLink,
        projectName,
      };
      console.log("payload done");
      const res = await axios.post("http://api.majs.live/user/static", payload);
      console.log("res done");

      if (res.status === 200) {
        window.alert("Deployment Successful");
        console.log("Successful Deployment");
      } else {
        window.alert("Invalid Deployment");
        console.log("Invalid Deployment");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Error occurred during deployment");
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    MakeAPICall(data);
  };

  const clearFields = () => {
    document.getElementById("accessKey").value = "";
    document.getElementById("secretKey").value = "";
    document.getElementById("repoLink").value = "";
    document.getElementById("projectName").value = "";
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        marginTop: "-150px",
        backgroundImage: theme.palette.mode === `linear-gradient(#0D0D0D)`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <AppAppBar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          scrollBehavior: "false",
        }}
      >
        {/* Main Grid */}
        <Grid
          container
          spacing={1}
          columns={16}
          sx={(theme) => ({
            mt: { xs: 8, sm: 13 },
            alignSelf: "center",
            height: { xs: 200, sm: 500 },
            width: "100%",
            backgroundSize: "cover",
            borderRadius: "10px",
            // outline: "1px solid",
            outlineColor: theme.palette.mode === alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode === `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        >
          {/* Form Grid */}
          <Grid item xs={12} sm={8}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    id="accessKey"
                    placeholder="Access key"
                    variant="outlined"
                    {...register("accessKey")}
                  />
                </Grid>
                <Grid item xs={10}></Grid>

                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    id="secretKey"
                    placeholder="Secret Key"
                    variant="outlined"
                    {...register("secretKey")}
                  />
                </Grid>
                <Grid item xs={10}></Grid>

                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    id="repoLink"
                    placeholder="Enter your project Repo Link"
                    variant="outlined"
                    {...register("repoLink")}
                  />
                </Grid>
                <Grid item xs={10}></Grid>

                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    id="projectName"
                    placeholder="Enter name of your project"
                    variant="outlined"
                    {...register("projectName")}
                  />
                </Grid>
                <Grid item xs={10}></Grid>

                <Grid item xs={10} className={classes.buttonContainer}>
                  <Button variant="contained" color="primary" type="submit">
                    Deploy
                  </Button>
                  <Box ml={3}></Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={clearFields}
                  >
                    Clear
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          {/*           
          Lottie Grid */}
          <Grid item sm={7}>
            <Box
              id="deployLottie"
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                outlineColor: alpha("#9CCCFC", 0.1),
                boxShadow: `0 0 24px 12px ${alpha("#033363", 0.2)}`,
                // outlineColor: alpha("#BFCCD9", 0.5),
                // boxShadow: `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`,
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Product;
