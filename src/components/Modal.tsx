import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import mobileshadow from "../assets/mobileshadow.svg";
import BG from "../assets/mobileh.svg";
import { useMediaQuery } from "@mui/material";

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false); 
  
const smallScreen = useMediaQuery(
  "(min-width: 300px) and (max-width: 600px)");

let phoneWidth;
let phoneHeight;
let phonePad;
if (smallScreen) {
  phoneWidth = 245;
  phoneHeight = "519px";
  phonePad = 2;
} else {
  phoneWidth = 265;
  phoneHeight = "570px";
  phonePad = 4;
}



const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: phoneWidth,
  boxShadow: 24,
  borderRadius: "15px",
  p: phonePad,
  height: phoneHeight,
  color: "grey 700",
  backgroundImage: `url(${BG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  
};



  React.useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    if (!hasVisitedBefore) {
      setOpen(true); // Show the modal if it's the first visit
      localStorage.setItem("hasVisitedBefore", "true"); // Set the flag indicating the visit
    }
  }, []);

  return (
    <div>
      <Modal
        component="div" // Specify the component as "div"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{
          backgroundImage: `url(${mobileshadow})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "90%",
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h3"
              fontSize="1.8rem"
              component="h2"
              fontWeight="bold"
              textAlign="center"
              sx={{ mt: 6, color: "grey 300" }}
            >
              Customize Your Experience
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 6 }}>
              Not a fan of colour? <br /> No problem!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Switch to a black and white background. 
              Simply click the switch on the top left of your screen.
              <br />
              <br />
              Switch back and forth at any time!
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
