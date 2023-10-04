import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import ImageGrid from './ImageGrid';
import luxBG from '../assets/luxBG.svg';
import { Link } from "react-router-dom";
import lux1 from '../assets/lux1.png';

const LuxeLove: React.FC = () => {
    return (
        <Box 
            height="100vh" 
            width="100vw"
            sx={{
                backgroundImage: `url(${luxBG})`,
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
                    top: 50,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflowY: "auto",
                    zIndex: 1,
                    padding: '2%',
                    marginTop: "20px"
                }}
            >
                <Grid container spacing={2}>
                    {/* Left Column */}
                    <Grid item xs={12} md={7}>
                        <Grid container direction="column" spacing={2}>
                            {/* Top Left box */}
                            <Grid item sx={{ height: '40%', marginBottom: "20px" }}>
                                <Box paddingLeft="50px">
                                    <h1 style={{ fontSize: '6rem', fontWeight: 700, color: '#4E371F', }}>Loved Luxe</h1>
                                    <p style={{ fontSize: '1.5rem', fontWeight: 400, color: '#8B6F51', }}>A collection of luxurious and decadent treats.</p>
                                </Box>
                            </Grid>
                            {/* Bottom Left box */}
                            <Grid item sx={{ height: '60%', display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end" }}>
                             <Box display="flex" flexDirection="column" flexWrap="wrap" justifyContent="center" alignItems="flex-end" height="100%">
                                 <ImageGrid />
                                    </Box>
                            </Grid>


                        </Grid>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={5}>
                        <Grid container direction="column" spacing={2}>
                            {/* Top Right box */}
                            <Grid item sx={{ height: '30%' }}>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                    justifyContent: "center",
                                    padding: "50px"
                                }}>
                                    <img src={lux1} alt="lux1" style={{ width: '90%' }} />
                                </Box>
                            </Grid>
                            {/* Bottom Right box */}
                            <Grid item sx={{ height: '70%' }}>
                                <Box sx={{paddingX: "50px"}}>
                                    <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#4E371F', }}>The Project</h2>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 400, color: '#8B6F51', }}>Luxed Love is a distinguished purveyor of second-hand luxury treasures, specializing in opulent bags and timepieces.   
                                    <br />
                                    <br /> With an unwavering commitment to luxury, Luxed Love seeks to present a lavish online shopping haven, spotlighting their meticulously curated selection of each item. 
                                    <br />
                                    <br />
                                    To achieve this, they desire a website that seamlessly melds elegance with modernity, employing a palette of Champagne and rich Earthy colours, offering visitors an immersive experience that reflects the brand's core values of luxury and sophistication.</p>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default LuxeLove;
