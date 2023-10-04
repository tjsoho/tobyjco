import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import { Link } from "react-router-dom";
import PE from '../assets/pe5.png';
import PeGrid from './PeGrid';
import peBG from '../assets/peBG.svg';

const Breath: React.FC = () => {
    return (
        <Box 
            height="100vh" 
            width="100vw"
            sx={{
                backgroundImage: `url(${peBG})`,
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
              color: "#30587c",
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
              color: "#30587c",
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
                                    <h1 style={{ fontSize: '5rem', fontWeight: 700, color: '#032544', }}>Project Empower</h1>
                                    <p style={{ fontSize: '1.5rem', fontWeight: 400, color: '#2E5579', }}>Breaking down the stigma of 'Finance is boring.'</p>
                                </Box>
                            </Grid>
                            {/* Bottom Left box */}
                            <Grid item sx={{ height: '60%', display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end" }}>
                             <Box display="flex" flexDirection="column" flexWrap="wrap" justifyContent="center" alignItems="flex-end" height="100%">
                                 <PeGrid />
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
                                    <img src={PE} alt="lux1" style={{ width: '90%' }} />
                                </Box>
                            </Grid>
                            {/* Bottom Right box */}
                            <Grid item sx={{ height: '70%' }}>
                                <Box sx={{paddingX: "50px"}}>
                                    <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#032544', }}>The Project</h2>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 400, color: '#2E5579', }}>Project Empower is a fun and interactive online course designed to teach you how to take control of your finances.
                                    <br />
                                    <br />
                                    The website design should be fun, bold and playful to break down the stigma that finance is boring. The website should be easy to navigate and the content should be easy to digest.
                                    <br />
                                    <br />
                                    The overall experience should be enjoyable bright and invitive, leaving visitors with a confidence to book in to an enjoyable interactive finance course.</p>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Breath;
