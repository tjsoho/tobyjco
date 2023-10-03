import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Switch,
} from "@mui/material";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import bw from "../assets/bw.svg";
import mobileBG from "../assets/colour-square.svg";
import tabletBG from "../assets/tabletBG.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

const Contact = () => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [bwMode, setBwMode] = useState(false);

  const handleToggle = () => {
    setBwMode(!bwMode);
  };

  const handleSubmitForm = (values: any) => {
    // Validate name field
    if (!values.name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    // Validate email field
    if (!values.email) {
      setEmailError("Email is required");
    } else if (!isValidEmail(values.email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    // Handle form submission logic here

    // Open the confirmation dialog
    setDialogOpen(true);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const glassMorphismStyles = {
    backdropFilter: "blur(55px) brightness(100%)",
    background:
      "linear-gradient(180deg, rgba(239, 239, 239, 0.6) 0%, rgba(239, 239, 239, 0.08) 100%)",
    borderRadius: "20px",
    border: "1px solid",
    borderColor: "#D9D9D9",
    height: "75%",
    width: "75%",
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "20px",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const textFieldStyle = {
    color: "black",
  };

  return (
    <Grid container>
      <Box position="absolute" top={0} left={0} padding={2} zIndex={1}>
        <Switch checked={bwMode} onChange={handleToggle} color="primary" />
      </Box>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginRight: "0px",
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
          <Box sx={glassMorphismStyles}>
            <Box
              sx={{
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
                mb: 2,
                maxWidth: 400,
                mx: "auto",
              }}
            >
              <Typography
                variant="h1"
                color="default"
                sx={{
                  letterSpacing: "4px",
                  fontSize: "3.3rem",
                  mb: 2,
                  textAlign: "left",
                }}
              >
                Contact <br /> Me.
              </Typography>
              <Formik
                initialValues={{ name: "", email: "", phone: "", message: "" }}
                onSubmit={handleSubmitForm}
              >
                <Form>
                  <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    name="name"
                    fullWidth
                    color="secondary"
                    sx={{ my: 1 }}
                    inputProps={{
                      style: textFieldStyle,
                    }}
                    error={Boolean(nameError)}
                    helperText={nameError}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        setNameError("Name is required");
                      } else {
                        setNameError("");
                      }
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    fullWidth
                    sx={{ my: 1 }}
                    inputProps={{
                      style: textFieldStyle,
                    }}
                    error={Boolean(emailError)}
                    helperText={emailError}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        setEmailError("Email is required");
                      } else if (!isValidEmail(e.target.value)) {
                        setEmailError("Invalid email address");
                      } else {
                        setEmailError("");
                      }
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Message"
                    variant="standard"
                    name="message"
                    fullWidth
                    sx={{ my: 1 }}
                    inputProps={{
                      style: textFieldStyle,
                    }}
                    multiline
                    rows={2}
                  />
                  <Button
                    type="submit"
                    sx={{
                      borderRadius: "30px",
                      height: "60px",
                      width: "80%",
                      textAlign: "center",
                      color: "#0F352D",
                      fontSize: "1.2rem",
                      mt: 7,
                    }}
                  >
                    Submit
                  </Button>
                  <Dialog
                    open={isDialogOpen}
                    onClose={() => setDialogOpen(false)}
                  >
                    <DialogTitle>Confirmation</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Your form has been submitted successfully!
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setDialogOpen(false)}>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Form>
              </Formik>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
