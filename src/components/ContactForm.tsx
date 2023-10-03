import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import React Router's useHistory

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track if the form is submitted
  const navigate = useNavigate(); // Initialize history from React Router

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Handle successful form submission here
      console.log("Form submitted successfully!");
      setIsSubmitted(true); // Set the state to true when the form is successfully submitted
      form.reset();

      // Redirect to the home page after a successful submission (assuming "/home" is your home page route)
      navigate("/#/home");
    } else {
      // Handle form submission errors here
      console.error("Form submission failed.");
    }
  };

  return (
    <Grid container spacing={0}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          backgroundColor: "#5a70e9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 8,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Let's Chat
        </Typography>
        <Typography variant="h5" style={{ textAlign: 'center' }} gutterBottom>
          I would love to hear what you are working on and how I could help.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          backgroundColor: "#ffe597",
          padding: { xs: '50px', sm: "0 20px"},
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-start", sm: "center"},
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="d20378cd-7df6-4008-ad81-8aab72bd3724" // Replace with your actual Access Key
          />
          <Typography variant="h3" align='center' gutterBottom>
          Contact Form
        </Typography>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={5}
            variant="outlined"
            margin="normal"
            required
          />
          <div style={{ display: "none" }}>
            <input type="checkbox" name="botcheck" />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Send Message
          </Button>
        </form>
        <p id="result" style={{ textAlign: "center" }}></p>
        {/* Display a pop-up message if the form is successfully submitted */}
        {isSubmitted && (
          <div className="popup">
            <Typography variant="h5">
              Thanks for getting in touch! I'll be reaching out to you very
              shortly.
            </Typography>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default ContactForm;
