import * as React from "react";
// import { useState } from "react";
import { Container, Button} from "@mui/material";
import { alpha } from "@mui/material";
import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";

import Box from "@mui/material/Box";

// import Typography from "@mui/material/Typography";
import AppAppBar from "./AppAppBar";

// import axios from "axios";

// export default function MainPage() {
//   const [showRepoLink, setShowRepoLink] = useState(true);
//   const [showProjectName, setShowProjectName] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [completed, setCompleted] = useState(false);

//   const [project, setProject] = useState({
//     repoLink: "",
//     projectName: "",
//   });

//   let value;

//   const handleInputs = (e) => {
//     console.log(e);
//     //name = e.target.name;
//     value = e.target.value;
//     setProject({ ...project, [e.target.id]: value });
//   };

//   const MakeAPICall = async (e) => {
//     e.preventDefault();
//     const { repoLink, projectName } = project;
//     // setLoading(true);
//     // setTimeout(() => {
//     //   setLoading(false);
//     //   setCompleted(true);
//     //   // Add your deployment logic here
//     // }, 18000);

//     // const res = await fetch("http://ec2-52-66-208-132.ap-south-1.compute.amazonaws.com:5001/auth/signup", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-type": "application/json",
//     //   },
//     //   body: JSON.stringify({
//     //     email,
//     //     password,
//     //   }),
//     // });
//     console.log("HERE");
//     const payload = {
//       repoLink: repoLink,
//       projectName: projectName,
//     };
//     console.log(payload);
//     const res = await axios.post(
//       "http://ec2-52-66-208-132.ap-south-1.compute.amazonaws.com:5001/user/deploy",
//       payload
//     );
//     console.log(res);

//     // const data = await res.json();
//     // if ((data.status === 422 || !data)) {
//     //   window.alert("INvalid Registration");
//     //   console.log("INvalid Registration");
//     // } else {

//     // }

//     if (res.status === 200) {
//       setCompleted(true);
//       window.alert(" Deployment Successfull");
//       console.log("Successfull Deployment");
//     } else {
//       window.alert("INvalid Deployment");
//       console.log("INvalid Deployment");
//     }
//   };
//   const projectLink = `${project.projectName}.majs.live`;
//   const handleNextClick = () => {
//     setShowRepoLink(false);
//     setShowProjectName(true);
//   };

//    // eslint-disable-next-line
//   const handleDeployClick = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setCompleted(true);
//       // Add your deployment logic here
//     }, 18000);
//   };
//  // eslint-disable-next-line
//   const handleButtonClick = () => {
    
//   };

//   return (
//     <>
//       <AppAppBar />
//       <Box
//         id="hero"
//         sx={(theme) => ({
//           width: "100%",
//           backgroundImage:
//             theme.palette.mode === "light"
//               ? "linear-gradient(#CEE5FD)"
//               : `linear-gradient(#0D0D0D)`,
//           backgroundSize: "100% 20%",
//           backgroundRepeat: "no-repeat",
//         })}
//       >
//         <Container
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             pt: { xs: 14, sm: 20 },
//             pb: { xs: 8, sm: 12 },
//             border: "",
//           }}
//         >
//           <Stack
//             spacing={3}
//             useFlexGap
//             sx={{ width: { xs: "90%", sm: "90%" } }}
//           >
//             <Typography
//               component="h2"
//               variant="h1"
//               sx={{
//                 display: "flex",
//                 flexDirection: { xs: "column", md: "row" },
//                 alignSelf: "center",
//                 textAlign: "center",
//               }}
//             >
//               Let's deploy something extraordinary.
//               <Typography
//                 component="span"
//                 variant="h1"
//                 sx={{
//                   color: (theme) =>
//                     theme.palette.mode === "light"
//                       ? "primary.main"
//                       : "primary.light",
//                 }}
//               ></Typography>
//             </Typography>
//             <Typography
//               variant="body1"
//               textAlign="center"
//               color="text.secondary"
//             >
//               Paste the link of an existing git repo
//             </Typography>
//             <Stack
//               direction={{ xs: "column", sm: "row" }}
//               alignSelf="center"
//               spacing={1}
//               useFlexGap
//               sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
//             >
//               {showRepoLink && (
//                 <>
//                   <TextField
//                     hiddenLabel
//                     size="small"
//                     variant="outlined"
//                     aria-label=""
//                     id="repoLink"
//                     placeholder="Your repo link here"
//                     onChange={handleInputs}
//                     inputProps={{
//                       autoComplete: "off",
//                       ariaLabel: "Repo Link",
//                     }}
//                   />
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleNextClick}
//                   >
//                     Next
//                   </Button>
//                 </>
//               )}

//               {showProjectName && (
//                 <>
//                   <TextField     
//                     id="projectName"
//                     hiddenLabel
//                     size="small"
//                     variant="outlined"
//                     aria-label=""
//                     placeholder="Your project name here"
//                     onChange={handleInputs}
//                     inputProps={{
//                       autoComplete: "off",
//                       ariaLabel: "Project Name",
//                     }}
//                   />
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={MakeAPICall}
//                     disabled={loading}
//                   >
//                     {loading ? "Deploying..." : "Deploy"}
//                   </Button>
//                 </>
//               )}

//               {completed && (
//                 <div>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={MakeAPICall}
//                     href={projectLink}
//                   >
//                     Click here
//                   </Button>
//                 </div>
//               )}
//             </Stack>
//           </Stack>
//         </Container>
//       </Box>
//     </>
//   );
// }




import { useForm } from 'react-hook-form';
import Grid from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Product = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        marginTop: "-150px",
        backgroundImage:
          theme.palette.mode ===`linear-gradient(#0D0D0D)`,
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
        <Grid
          container
          spacing={2}
          columns={16}
          sx={(theme) => ({
            mt: { xs: 8, sm: 15 },
            alignSelf: "center",
            height: { xs: 200, sm: 500 },
            width: "100%",
            backgroundSize: "cover",
            borderRadius: "10px",
            // outline: "1px solid",
            outlineColor:
              theme.palette.mode === alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode ===`0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        >

      <form  onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <TextField
              fullWidth
              id="accessKey"
              placeholder="Access key"
              variant="outlined"
              {...register('accessKey')}
              />
          </Grid>
          <Grid item md={6}></Grid>

          <Grid item md={6}>
            <TextField
              fullWidth
              id="secretKey"
              placeholder="Secret Key"
              variant="outlined"
              {...register('secretKey')}
              />
          </Grid>
          <Grid item md={6}></Grid>

          <Grid item md={6}>
            <TextField
              fullWidth
              id="repoLink"
              placeholder="Enter your project Repo Link"
              variant="outlined"
              {...register('repoLink')}
              />
          </Grid>
          <Grid item md={6}></Grid>

          <Grid item md={6}>
            <TextField
              fullWidth
              id="projectName"
              placeholder="Enter name of your project"
              variant="outlined"
              {...register('projectName')}
              />
          </Grid>
          <Grid item md={6}></Grid>

          <Grid item md={6} className={classes.buttonContainer}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
              </Grid>
    </Container>
    </Box>
    
  );
  
};

export default Product;
