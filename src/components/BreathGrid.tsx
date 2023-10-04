import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import b2 from '../assets/breath2.png';
import b3 from '../assets/breath3.png';
import b4 from '../assets/breath4.png';
import b5 from '../assets/breath-5.png';


const imageArray = [
    b2,
    b3,
    b4,
    b5,
];

interface ImageGridProps {
    images?: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
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
                    bgcolor="#CDC2A5"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    padding="10px"
                >
                    <img src={src} alt={'breath'} style={{maxWidth: '100%', maxHeight: '100%'}} />
                </Box>
            ))}
        </Box>
    );
};

export default ImageGrid;
