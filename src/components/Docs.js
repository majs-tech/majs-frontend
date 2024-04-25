import React from "react";
import AppAppBar from "./AppAppBar";
import Box from "@mui/material/Box";
import { CopyBlock } from 'react-code-blocks';
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Docs() {
    const code1 = `#!/bin/bash

# Set variables
IAM_USER_NAME="majstech"

# Create IAM user
aws iam create-user --user-name $IAM_USER_NAME ; \

# Attach AmazonEC2FullAccess policy to IAM user and output access keys
aws iam attach-user-policy --user-name $IAM_USER_NAME --policy-arn arn:aws:iam::aws:policy/AmazonEC2FullAccess ; \
aws iam create-access-key --user-name $IAM_USER_NAME`;
    const language = 'javascript';

    const myCustomTheme = {backgroundColor: "#222", codeColor: "#ccc", textColor: "#ccc"};
  return (
    
    <>
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(#CEE5FD)"
              : `linear-gradient(#0D0D0D)`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
         // border: "1px solid white",
        })}
      >
        <AppAppBar />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
            //border: "1px solid yellow",
          }}
        >
        <div>
            <Typography color="white" component="h2" variant="h4">
            What is IAM
          </Typography>
          <Typography>
          IAM stands for Identity and Access Management, a feature provided by Amazon Web Services (AWS) that helps in securely controlling access to AWS resources. IAM allows you to manage users, security credentials such as access keys, and permissions that control which AWS resources users and applications can access. Key components of IAM include:
          <ol>
            <li>1. Users: End-users (such as people, AWS services, or applications) that interact with AWS resources.</li>
            <li>2. Groups: Collections of users under a set of permissions.</li>
            <li>3. Roles: IAM identities with permissions that can be assumed by a trusted entity (like AWS services, another user, or an application).</li>
            <li>4. Policies: Documents that define permissions and can be applied to users, groups, or roles.</li>
          </ol>
          <br></br>
          <Typography color="white" component="h2" variant="h4">
          Why we need access key and secret
          </Typography>
          <Typography>
          MAJS needs access key and secret in order to access your AWS infrastructure, one needs to run this script in AWS CloudShell in order to get their access key and secret which subsequently can be used to deploy projects using our platform. 
          </Typography>

          <br></br>

          </Typography>
                <Typography>Run the following commands in your cloud shell to provide your credentials:</Typography>
                <CopyBlock
                    text={code1}
                    language={language}
                    showLineNumbers={false}
                    wrapLines={true}
                    theme={myCustomTheme} 
                    codeBlock
                    icon={<FaCopy />}
                    onCopy={() => copy(code1)}
                />
                <br></br>
          <Typography color="white" component="h2" variant="h4">
          Full Stack Applications
          </Typography>
          <Typography>
          One needs to do the following in order to deploy a full-stack application such as MERN, LAMP, etc. using our platform. 
          <ol>
          <li>1. Take DATABASE_URL from .env</li>
          <li>2. Take BASE_URL from .env</li>
          </ol>

If a user makes the above changes in their application, they can deploy applications seamlessly on any given provider using our platform.

          </Typography>
          
            </div>
            <Typography color="primary" component="h1" variant="h2">
            
          </Typography>
          <br></br>
        </Container>
        </Box>
        </>
  );
}      

export default Docs;