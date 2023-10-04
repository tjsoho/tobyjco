import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import computerFrame from "../assets/lux1.png";
import ll1 from "../assets/lovedLux1-1.jpg";
import { Link } from "react-router-dom";

const ComputerOne = () => {
  const smallScreen = useMediaQuery(
    "(min-width: 300px) and (max-width: 400px)"
  );
  const mediumScreen = useMediaQuery(
    "(min-width: 400px) and (max-width: 600px)"
  );
  const largeScreen = useMediaQuery(
    "(min-width: 600px) and (max-width: 1000px)"
  );

  let padBot;

  let height;

  if (smallScreen) {
    height = "300px";
    padBot = "17px";
  } else if (mediumScreen) {
    height = "300px";
    padBot = "19px";
  } else if (largeScreen) {
    height = "400px";
    padBot = "30px";
  } else {
    height = "500px";
    padBot = "30px";
  }

  return (
    // Phone container
    <Box
      sx={{
        backgroundImage: `url(${computerFrame})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", // Center the background image
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* Laptop images */}
      <Box
        sx={{
          height: height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: padBot,
          paddingLeft: "3px",
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
        <Link to="/luxelove"></Link>
      </Box>
    </Box>
  );
};

export default ComputerOne;
