import React from "react";
import { Box, Grid, Button, useMediaQuery } from "@mui/material";
import Chev1 from "../assets/chevh.png";
import { Link } from "react-router-dom";
import ChevGrid from "./ChevGrid";
import chevbg from "../assets/chevbg4.svg";

const Chevell: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const fontSize = isSmallScreen ? "3rem" : "6rem";
  const top = isSmallScreen ? 80 : 50;

  return (
    <Box
      height="100vh"
      width="100vw"
      sx={{
        backgroundImage: `url(${chevbg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* The Menu Button */}
      <Box
        position="absolute"
        top={0}
        right={0}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          padding: "20px",
        }}
        zIndex={2}
      >
        {/* The Designs Button */}
        <Link to="/uidesigns" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "150px",
              height: "45px",
              fontSize: 20,
              margin: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "#574e3d",
            }}
          >
            Designs
          </Button>
        </Link>
        {/* The Menu Button */}
        <Link
          to="/menu"
          style={{ textDecoration: "none", marginRight: "10px" }}
        >
          {" "}
          {/* Added marginRight for spacing between buttons */}
          <Button
            variant="text"
            sx={{
              width: "150px",
              height: "45px",
              fontSize: 20,
              margin: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "#574e3d",
            }}
          >
            Menu
          </Button>
        </Link>
      </Box>

      {/* The scrollable content container */}
      <Box
        sx={{
          position: "absolute",
          top: top,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: "auto",
          zIndex: 1,
          padding: "2%",
          marginTop: "20px",
        }}
      >
        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid item xs={12} md={7}>
            <Grid container direction="column" spacing={2}>
              {/* Top Left box */}
              <Grid item sx={{ height: "40%", marginBottom: "20px" }}>
                <Box paddingX="50px">
                  <h1
                    style={{
                      fontSize: fontSize,
                      fontWeight: 700,
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Chevell
                  </h1>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Effortlessly stylish wedding photography.
                  </p>
                </Box>
              </Grid>
              {/* Bottom Left box */}
              <Grid
                item
                sx={{
                  height: "60%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  flexWrap="wrap"
                  justifyContent="center"
                  alignItems="flex-end"
                  height="100%"
                >
                  <ChevGrid />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={5}>
            <Grid container direction="column" spacing={2}>
              {/* Top Right box */}
              <Grid item sx={{ height: "30%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    padding: "50px",
                  }}
                >
                  {!isSmallScreen && (
                    <img src={Chev1} alt="lux1" style={{ width: "90%" }} />
                  )}
                </Box>
              </Grid>
              {/* Bottom Right box */}
              <Grid item sx={{ height: "70%" }}>
                <Box sx={{ paddingX: "20px" }}>
                  <h2
                    style={{
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: "black",
                      marginBottom: "25px",
                    }}
                  >
                    The Project
                  </h2>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: "gray",
                      marginBottom: "25px",
                    }}
                  >
                    Chevell is a boutique wedding photography studio inspired by
                    the style and timeless fashion of Vogue magazine.
                    <br />
                    <br />
                    The website is a stylish, sophisticated yet simplistic
                    design with a focus on showcasing the talent of Chevell
                    photography.
                    <br />
                    <br />
                    The overall experience should be clean and easy to navigate
                    drawing users to the photography and videography.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Chevell;
