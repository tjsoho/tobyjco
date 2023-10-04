import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import chev1 from "../assets/chev1.png";
import chev2 from "../assets/chev2.jpg";
import chev3 from "../assets/chev3.jpg";
import chev4 from "../assets/chev4.jpg";


const imageArray = [chev1, chev2, chev3, chev4];

interface ImageGridProps {
  images?: string[];
}

const ChevGrid: React.FC<ImageGridProps> = ({ images }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const selectedImages = images || [
    imageArray[0],
    imageArray[1],
    imageArray[2],
    imageArray[3],
  ];

  // Check if the selectedImages array is available and has content
  if (!selectedImages || selectedImages.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns={isMdUp ? "1fr 1fr" : "1fr"}
      gap={2}
      width="100%" // Set width to 100vw
      height="100%" // Set height to 100vh
      padding="50px"
    >
      {selectedImages.map((src, index) => (
        <Box
          key={index}
          width="100%"
          height="100%" // You can adjust this value to modify the height of individual boxes
          bgcolor="#fff"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="10px"
        >
          
            <img
              src={src}
              alt={"chevell"}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          
        </Box>
      ))}
    </Box>
  );
};

export default ChevGrid;
