import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import lux1 from '../assets/lux1.png';
import lux2 from '../assets/lux2.png';
import lux3 from '../assets/lux3.png';
import lux4 from '../assets/lux4.png';
import lux5 from '../assets/lux5.png';

const imageArray = [
    lux1,
    lux2,
    lux3,
    lux4,
    lux5,
];

interface ImageGridProps {
    images?: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    const selectedImages = images || [imageArray[2], imageArray[3], imageArray[1], imageArray[4]];

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
                    bgcolor="#F3E2C8"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    padding="10px"
                >
                    <img src={src} alt={'luxed love'} style={{maxWidth: '100%', maxHeight: '100%'}} />
                </Box>
            ))}
        </Box>
    );
};

export default ImageGrid;
