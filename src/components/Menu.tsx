import React from "react";
import { useState, useEffect, useMemo } from "react";
import {
  Box,
  Grid,
  Button,
  useMediaQuery,
  Switch,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // <-- Added Close Icon import
import { Link, useNavigate } from "react-router-dom";
import tabletBG from "../assets/largeSVG.svg";
import bw from "../assets/bw.svg";
import Modal from "./Modal";

const colors = [
  "#FFE597",
  "#919FF8",
  "#FE7075",
  "#FE555D",
  "#5B71EA",
  "#FFCF51",
];

const Menu = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");
  const [bwMode, setBwMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate(); // <-- Added useHistory for navigation control

  const styles = useMemo(() => {
    const commonButtonStyles = {
      backgroundColor: "white",
      color: "black",
      padding: "10px 20px",
      height: "25%",
    };

    return {
      box: {
        height: smallScreen ? "20vh" : "25vh",
        width: smallScreen ? "45vw" : "40vw",
        border: "1px solid white",
        borderRadius: "5px",
        margin: "20px",
        backdropFilter: "blur(55px) brightness(80%)",
        background:
          "linear-gradient(45deg, rgba(94, 64, 64, 0.3) 0%, rgba(64, 64, 64, 0.08) 70%)",
      },
      button: {
        ...commonButtonStyles,
        fontSize: smallScreen ? "15px" : "20px",
        width: smallScreen ? "130px" : "230px",
      },
    };
  }, [smallScreen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundImage: `url(${bwMode ? bw : tabletBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "10px 20px",
      }}
    >
      {/* Close Button */}
      <IconButton
        style={{ position: "absolute", top: "10px", right: "10px" }}
        onClick={() => navigate(-1)}
      >
        <CloseIcon fontSize="large" />
      </IconButton>

      <Box position="absolute" top={0} left={0} padding={2} zIndex={1}>
        <Switch
          checked={bwMode}
          onChange={() => setBwMode(!bwMode)}
          color="primary"
        />
      </Box>
      <Grid container sm={12} md={6} direction="column" spacing={4} alignItems="center">
        <AboutMeButton styles={styles} />
        <DesignButton styles={styles} />
      </Grid>
      <Grid container sm={12} md={6} direction="column" spacing={4} alignItems="center">
        <PortfolioButton styles={styles} />
        <ContactButton styles={styles} />
      </Grid>

      {openModal && <Modal />}
    </Box>
  );
};

// const onDownloadPDFClick = () => {
//   fetch("/TobyCarrollCV.pdf").then((response) => {
//     response.blob().then((blob) => {
//       const fileURL = window.URL.createObjectURL(blob);
//       let alink = document.createElement("a");
//       alink.href = fileURL;
//       alink.download = "TobyCarrollCV.pdf";
//       alink.click();
//     });
//   });
// };

interface MenuItemProps extends ButtonProps {
  text: string;
  path?: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, path, styles, onClick }) => (
  <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
    <Box bgcolor={colors[4]} sx={styles.box}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {onClick ? (
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={onClick}
          >
            {text}
          </Button>
        ) : (
          <Link to={path!} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" style={styles.button}>
              {text}
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  </Grid>
);

interface ButtonProps {
  styles: {
    box: React.CSSProperties;
    button: React.CSSProperties;
  };
}

const AboutMeButton: React.FC<ButtonProps> = ({ styles }) => (
  <MenuItem text="About Me" path="/aboutme" styles={styles} />
);

const DesignButton: React.FC<ButtonProps> = ({ styles }) => (
  <MenuItem text="DESIGNS" path="/uidesigns" styles={styles} />
);
const ContactButton: React.FC<ButtonProps> = ({ styles }) => (
  <MenuItem text="CONTACT" path="/contactform" styles={styles} />
);
const PortfolioButton: React.FC<ButtonProps> = ({ styles }) => (
  <MenuItem text="CODING Projects" path="/portfolio" styles={styles} />
);

// const DownloadButton: React.FC<ButtonProps> = ({ styles }) => (
//   <MenuItem text="RESUME" styles={styles} onClick={onDownloadPDFClick} />
// );

export default Menu;
