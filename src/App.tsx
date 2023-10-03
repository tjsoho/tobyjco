import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Home from "./components/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/style/root.css";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
// import ContactForm2 from "./components/ContactForm2";
import Menu from "./components/Menu";
import Background from "./components/Background";
import MobileFrame from "./components/MobileFrame";
import UiDesigns from "./components/UiDesigns";
import LuxeLove from "./components/LuxeLove";
import Breath from "./components/Breath";
import ProjectEmpower from "./components/ProjectEmpower";
import Chevell from "./components/Chevell";
import ContactForm from "./components/ContactForm"

function App() {
  // State for managing the modal's open/close status
  

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<ContactForm />} />
            <Route path="menu" element={<Menu />} />
            <Route path="background" element={<Background />} />
            <Route path="mobilef" element={<MobileFrame />} />
            <Route path="uidesigns" element={<UiDesigns />} />
            <Route path="luxelove" element={<LuxeLove />} />
            <Route path="breath" element={<Breath />} />
            <Route path="projectempower" element={<ProjectEmpower />} />
            <Route path="chevell" element={<Chevell />} />
            <Route path="contactform" element={<ContactForm />} />
            
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
