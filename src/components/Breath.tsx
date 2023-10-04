import React from "react";
import { Box, Grid, Button, useMediaQuery } from "@mui/material";
import breathbg from "../assets/breathBG.svg";
import { Link } from "react-router-dom";
import BreathGrid from "./BreathGrid";
import b1 from "../assets/breath1.png";

const Breath: React.FC = () => {
  
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const fontSize = isSmallScreen ? "3rem" : "6rem";
  const top = isSmallScreen ? 80 : 50;
  
  return (
    <Box
      height="100vh"
      width="100vw"
      sx={{
        backgroundImage: `url(${breathbg})`,
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
                      color: "#090F09",
                      textAlign: "center",
                    }}
                  >
                    Breath
                  </h1>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "#434943",
                      textAlign: "center",
                    }}
                  >
                    Find Harmony in Nature with our mindfulness retreats.
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
                  <BreathGrid />
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
                  <img src={b1} alt="lux1" style={{ width: "90%" }} />
                  )}
                </Box>
              </Grid>
              {/* Bottom Right box */}
              <Grid item sx={{ height: "70%" }}>
                <Box sx={{ paddingX: "50px" }}>
                  <h2
                    style={{
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: "#090F09",
                      marginBottom: '25px'
                    }}
                  >
                    The Project
                  </h2>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: "#434943",
                      marginBottom: '25px'
                    }}
                  >
                    Breath is a tranquil retreat deeply rooted in nature,
                    offering a sanctuary for wellness and self-discovery.
                    <br />
                    <br />
                    The website design, inspired by forest green and earthy
                    browns, embodies the essence of this natural haven.As users
                    navigate through its pages, they should feel as though they
                    are wandering through a pristine woodland, with every aspect
                    of the site connecting them to the natural world.
                    <br />
                    <br />
                    The overall experience should be soothing and immersive,
                    leaving visitors with a profound sense of serenity and a
                    desire to explore the healing potential of nature.
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

export default Breath;
