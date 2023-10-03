import { Box } from "@mui/system";
import mobileFrame from "../assets/mobileshadow.svg";
import Shadow1 from "../assets/shadow1.png";
import Shadow2 from "../assets/shadow2.png";

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
          src={Shadow1}
          alt="shadow"
          style={{
            maxHeight: "480px",
            maxWidth: "300px",
            marginBottom: "10px",
          }}
        />
        <img
          src={Shadow2}
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
