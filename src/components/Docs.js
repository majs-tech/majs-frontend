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