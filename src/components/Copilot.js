import React from 'react';
import AppAppBar from './AppAppBar'; 

const Copilot= ({ src }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}> 
      <AppAppBar /> 
      <iframe
        src="" 
        style={{
          position: "absolute",
        //   marginTop: '20px', 
          left: 0,
          width: "100%",
          height: "calc(100% - 64px)", 
          border: "none",
          marginTop: "64px", 
        }}
        title="Terraforged Copilot"
      ></iframe>
    </div>
  );
};

export default Copilot;