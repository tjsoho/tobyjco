import { Box } from "@mui/system";
import React from "react";
import mobileFrame from "../assets/mobileshadow.svg";
import guitarHome from "../assets/guitarHome.svg";
import guitarTune from "../assets/guitarTune.svg";
import bassTune from "../assets/bassTune.svg";

const MobileF = () => {
  return (
    // Phone container
    <Box
      sx={{
        backgroundImage: `url(${mobileFrame})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "30px",
        maxHeight: "800px",
        
      }}
    >
      {/* Phone images */}
      <Box
        sx={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto", // Enable vertical scrolling
          "&::-webkit-scrollbar": {
            width: "0.4em", // Adjust the width of the scrollbar as needed
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent", // Make the scrollbar track transparent
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent", // Make the scrollbar thumb transparent
          },
        }}
      >
        <img
          src={guitarHome}
          alt="shadow"
          style={{
            maxHeight: "480px",
            maxWidth: "300px",
            marginBottom: "10px",
          }}
        />
        <img
          src={guitarTune}
          alt="shadow"
          style={{
            maxHeight: "100%",
            borderRadius: "25px",
            marginBottom: "10px",
          }}
        />
        <img
          src={bassTune}
          alt="shadow"
          style={{
            maxHeight: "100%",
            borderRadius: "25px",
          }}
        />
      </Box>
    </Box>
  );
};

export default MobileF;
