import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import verticalSVG from "../assets/vertical-hello.svg";
import horizontal from "../assets/horizontal.svg";
import { Link } from "react-router-dom";



const Home = () => {
  const smallScreen = useMediaQuery(
    "(min-width: 300px) and (max-width: 600px)"
  );
  const mediumScreen = useMediaQuery(
    "(min-width: 600px) and (max-width: 1350px)"
  );

  let bgSVG;
  let headingSize;
  let buttonPos;
  let SVGsize;

  if (smallScreen) {
    bgSVG = "url(" + verticalSVG + ")";
    headingSize = "6rem";
    buttonPos = -200;
    SVGsize = "70%";
  } else if (mediumScreen) {
    bgSVG = "url(" + horizontal + ")";
    headingSize = "8rem";
    buttonPos = -150;
    SVGsize = "90%";
  } else {
    bgSVG = "url(" + horizontal + ")";
    headingSize = "12rem";
    buttonPos = -250;
    SVGsize = "95%";
  }

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#5B71EA",
          height: "100vh",
          width: "100vw",
          backgroundImage: bgSVG,
          backgroundRepeat: "no-repeat",
          backgroundSize: SVGsize,
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/menu" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "150px",
              height: "50px",
              fontSize: 20,
              top: buttonPos,
            }}
          >
            Menu
          </Button>
        </Link>

        <Typography
          variant="h1"
          sx={{ color: "#FFFFFF", fontSize: headingSize }}
        >
          Toby J
        </Typography>
        <Typography variant="h3">UX/UI Designer</Typography>

        
      </Box>
    </div>
  );
};

export default Home;