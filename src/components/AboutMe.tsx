import { useState } from "react";
import {
  Grid,
  Box,
  useMediaQuery,
  Typography,
  Button,
  Switch,
} from "@mui/material";
import mobileBG from "../assets/colour-square.svg";
import tabletBG from "../assets/tabletBG.svg";
import portrait from "../assets/TobyPortraitNoBG.png";
import { Link } from "react-router-dom";
import bw from "../assets/bw.svg";

const AboutMe = () => {
  const smallScreen = useMediaQuery(
    "(min-width: 300px) and (max-width: 600px)"
  );
  const mediumScreen = useMediaQuery(
    "(min-width: 600px) and (max-width: 900px)"
  );
  const largeScreen = useMediaQuery(
    "(min-width: 900px) and (max-width: 1350px)"
  );
  const [bwMode, setBwMode] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  let headingSize;
  let imageHeight;
  let imageTop;
  let imageLeft;
  let pad;
  let textMargin;
  let textH;

  if (smallScreen) {
    headingSize = "3.3rem";
    imageHeight = "300px";
    imageTop = "calc(100% - 244px)"; // Adjusted value to position the image at the bottom line
    imageLeft = "calc(65% - 125px)";
    pad = "20px";
    textMargin = "0px";
    textH = "calc(50vh - 10px)";
  } else if (mediumScreen) {
    headingSize = "4rem";
    imageHeight = "430px";
    imageTop = "calc(100% - 348px)";
    imageLeft = "calc(65% - 151px)";
    pad = "20px";
    textMargin = "0px";
    textH = "calc(50vh - 20px)";
  } else if (largeScreen) {
    headingSize = "5rem";
    imageHeight = "450px";
    imageTop = "calc(100% - 365px)";
    imageLeft = "calc(65% - 70px)";
    pad = "20px";
    textMargin = "100px";
    textH = "calc(50vh - 50px)";
  } else {
    headingSize = "7rem";
    imageHeight = "650px";
    imageTop = "calc(100% - 526px)";
    imageLeft = "calc(75% - 180px)";
    pad = "80px";
    textMargin = "250px";
    textH = "calc(50vh - 150px)";
  }

  const handleToggle = () => {
    setBwMode(!bwMode);
  };

  const glassMorphismStyles = {
    backdropFilter: "blur(55px) brightness(100%)",
    background:
      "linear-gradient(180deg, rgba(239, 239, 239, 0.6) 0%, rgba(239, 239, 239, 0.08) 100%)",
    borderRadius: "5px",
    border: "1px solid",
    borderColor: "#D9D9D9",
    height: "80%",
    width: "75%",
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: pad,
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            backgroundImage: isSmallScreen
              ? `url(${bwMode ? bw : mobileBG})`
              : `url(${bwMode ? bw : tabletBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: 0,
            position: "relative",
          }}
        >
          <Box position="absolute" top={0} left={0} padding={2} zIndex={1}>
            <Switch checked={bwMode} onChange={handleToggle} color="primary" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginRight: "15px",
            }}
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
          <Box sx={{ ...glassMorphismStyles }}>
            <Box>
              <div style={{ position: "relative" }}>
                <Typography
                  variant="h1"
                  sx={{
                    marginBottom: "10px",
                    marginLeft: "25px",
                    fontSize: headingSize,
                  }}
                >
                  About
                  <br />
                  Me.
                </Typography>
                <Box
                  sx={{
                    maxHeight: textH,
                    overflowY: "auto",
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      marginRight: textMargin,
                      paddingRight: "60px",
                      paddingLeft: "25px",
                      overflowY: "auto", // Enable vertical scrolling
                      "&::-webkit-scrollbar": {
                        marginLeft: "0.5rem",
                        height: "0.1em", // Adjust the width of the scrollbar as needed
                        width: "0.1em", // Adjust the width of the scrollbar as needed
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "transparent", // Make the scrollbar track transparent
                      },
                      "&::-webkit-scrollbar-thumb": {
                        width: "1px",
                        background: "white", // Make the scrollbar thumb transparent
                      },
                    }}
                  >
                    Hey there, I'm Toby J. Think of me as the guy who swapped a
                    guitar pick for a digital pen. 
                    <br />
                    <br />
                    How's this sound? In just 30
                    seconds of your time, I'll serve you the bite-sized tale of
                    my evolution, starting as a musician and ending up as a web
                    designer.
                    <br />
                    <br />
                    You see, my website isn't just a fancy way of
                    encouraging you to fill out a contact form, it's a way,
                    albeit a brief way, for us to get to know each. I want you
                    to be able to share the story and evolution of your brand.
                    If I'm encouraging you to craft your best story, it only
                    seems right that I share mine with you.
                    <br />
                    <br />
                    So, shall we begin?
                    Start the clock… 30 seconds starts ….NOW! 
                    <br />
                    <br />
                    Picture this: my
                    life was a whirlwind tour, and music was my passport. Paris,
                    London, Zurich – these cities weren't just dots on a map;
                    they were canvases where every cobblestone and neon sign
                    taught me the magic of creativity. 
                  
                    <br />
                    <br />
                    I absorbed their essence
                    like a sponge, from the sophistication of Parisian
                    boulevards to the electric buzz of Hong Kong's vibrant
                    streets. Just like I'd take a song and make it my own, these
                    cities taught me the art of observation and crafting
                    something utterly unique. 
                    <br />
                    <br />
                    When I wasn’t performing, I ran a
                    music school for kids rock bands. What a rollercoaster of a
                    journey. Balancing schedules, managing diverse
                    personalities, ensuring every note is pitch-perfect – it was
                    more than just teaching tunes; it was a crash course in
                    mastering patience, perseverance, and turning passion into a
                    thriving venture. 
                    <br />
                    <br />
                    But here's the plot twist: After 20 years
                    I called it time on my life as a ‘muso' and plunged
                    headfirst into the world of web design. You might think it's
                    a leap from melodies to mock-ups, but here's the common
                    thread – an unquenchable thirst for learning and creating.
                    Believe me, the rush of cracking a challenging design is as
                    exhilarating as nailing a killer guitar solo. 
                    <br />
                    <br />
                    And when I'm
                    off the clock, you'll find me riding the waves. Surfing is
                    my personal version of a coffee break – it clears the mind
                    and offers a fresh perspective. 
                    <br />
                    <br />
                    So, if you're on the hunt
                    for someone with a symphony of experiences, a knack for
                    innovation, and a flair for turning challenges into art,
                    let's chat. Who knows? We might just create something truly
                    magical together, and this time, it'll be a design symphony.
                    <br />
                    <br />
                    Okay. So now that we're getting to know each other, I'm eager to
                    hear your story too. Feel free to share – I'm all ears and
                    pixels!
                  </Typography>
                </Box>
              </div>
            </Box>
            <img
              src={portrait}
              alt="display portrait of Toby"
              style={{
                maxWidth: "auto",
                height: imageHeight,
                position: "absolute",
                top: imageTop,
                right: "50px",
                left: imageLeft,
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
