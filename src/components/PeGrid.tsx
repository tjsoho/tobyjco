import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import pe1 from '../assets/pe1.png';
import pe2 from '../assets/pe2.jpg';
import pe3 from '../assets/pe3.png';
import pe4 from '../assets/pe4.png';



const imageArray = [
   pe1,
    pe2,
    pe3,
    pe4,
];

interface ImageGridProps {
    images?: string[];
}

const PeGrid: React.FC<ImageGridProps> = ({ images }) => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    const selectedImages = images || [imageArray[0], imageArray[1], imageArray[2], imageArray[3]];

    // Check if the selectedImages array is available and has content
    if (!selectedImages || selectedImages.length === 0) {
        return <div>No images available</div>;
    }

    return (
        <Box
            display="grid"
            gridTemplateColumns={isMdUp ? '1fr 1fr' : '1fr'}
            gap={2}
            width="100%"   // Set width to 100vw
            height="100%"  // Set height to 100vh
            padding="50px"
        >
            {selectedImages.map((src, index) => (
                <Box
                    key={index}
                    width="100%"
                    height="100%" // You can adjust this value to modify the height of individual boxes
                    bgcolor="#E0E8EF"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    padding="10px"
                >
                    <img src={src} alt={'project empower'} style={{maxWidth: '100%', maxHeight: '100%'}} />
                </Box>
            ))}
        </Box>
    );
};

export default PeGrid;
