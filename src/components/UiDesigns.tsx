import { useState } from "react";
import { Box, Grid, useMediaQuery, Switch, Button, Typography } from "@mui/material";
import tabletBG from "../assets/largeSVG.svg";
import MobileFrame from "./MobileFrame";
import MobileFrame2 from "./MobileFrame2";
import MobileFrame3 from "./MobileFrame3";
import bw from "../assets/bw.svg";
import { Link } from "react-router-dom";
import ComputerOne from "./ComputerOne";
import ComputerTwo from "./ComputerTwo";
import ComputerFour from "./ComputerFour";
import ComputerThree from "./ComputerThree";

const UiDesigns = () => {
  const smallScreen = useMediaQuery("(max-width: 900px)");
  const [bwMode, setBwMode] = useState(false);

  let bheight;
  if (smallScreen) {
    bheight = "283vh";
  } else {
    bheight = "100vh";
  }

  const handleToggle = () => {
    setBwMode(!bwMode);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={bheight}
      sx={{
        backgroundImage: `url(${bwMode ? bw : tabletBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "0 20px",
        marginBottom: "20px",
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* The switch for bwMode */}
      <Box position="absolute" top={0} left={0} padding={2} zIndex={2}>
        <Switch checked={bwMode} onChange={handleToggle} color="primary" />
      </Box>

      {/* The Menu Button */}
      <Box
        position="absolute"
        top={0}
        right={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginRight: "0px",
        }}
        zIndex={2}
      >
        <Link to="/menu" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "150px",
              height: "45px",
              fontSize: 20,
              margin: "10px",
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
          top: 80,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: "auto",
          zIndex: 1,
        }}
      >
        <Grid container spacing={2}>
        <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box>
              <Typography variant="h2" textAlign="center" sx={{ marginBottom: "20px" }}>
               Ui Designs 
              </Typography>
              <Typography variant="body1" textAlign="center" sx={{ marginBottom: "20px" }}>
              Scroll over the mobile devices or click on the laptops to explore further.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box sx={{ marginTop: "0px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <MobileFrame />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <MobileFrame2 />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <MobileFrame3 />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* The ComputerOne Component */}
        <Grid container spacing={4} mt="20px">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width="100vw"
              marginTop={16}
            >
              <ComputerOne />
              <Link to="/luxelove" style={{ textDecoration: "none" }}>  
              <Button sx={{
                width: "250px",
                height: "65px",
                fontSize: 20,
                marginBottom: "20px",
              }}>Explore Loved Luxe</Button>
              </Link>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width="100vw"
              marginTop={16}
            >
              <ComputerTwo />
              <Link to="/breath" style={{ textDecoration: "none" }}>  
              <Button sx={{
                width: "250px",
                height: "65px",
                fontSize: 20,
                marginBottom: "20px",
              }}>Explore Breath</Button>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width="100vw"
              marginTop={16}
            >
                
              <ComputerThree />
              
              <Link to="/projectempower" style={{ textDecoration: "none" }}>  
              <Button sx={{
                width: "250px",
                height: "65px",
                fontSize: 20,
                marginBottom: "20px",
              }}>Explore Project Empower</Button>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width="100vw"
              marginTop={16}
            >
              <ComputerFour />
              <Link to="/chevell" style={{ textDecoration: "none" }}>  
              <Button sx={{
                width: "250px",
                height: "65px",
                fontSize: 20,
                marginBottom: "20px",
              }}>Explore Chevell</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* The Footer */}
        
      </Box>
    </Box>
  );
};

export default UiDesigns;
