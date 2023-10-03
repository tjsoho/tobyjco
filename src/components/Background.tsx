
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useState } from "react";
import tabletBG from "../assets/tabletBG.svg";
import tabletBG2 from "../assets/tabletBG2.svg";
import tabletBG3 from "../assets/tabletBG3.svg";

const transition = {
  duration: 4,
  ease: "easeInOut",
};

const images = [tabletBG, tabletBG2, tabletBG3];

const Background = () => {
  const [currentImage, cycleImage] = useCycle(0, 1, 2);
  const [isActive, setIsActive] = useState(true);

  const handleAnimationComplete = () => {
    setIsActive(true);
    cycleImage();
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            opacity: 0,
          }}
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 5 }}
          transition={transition}
          onAnimationComplete={handleAnimationComplete}
          exit={{ opacity: 0 }}
        >
          <img
            src={images[currentImage]}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Background;
