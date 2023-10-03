import React, { useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';

const Scroll: React.FC = () => {
  const text = 'MOBILE SCROLL';
  const [showText, setShowText] = React.useState('');

  const animateText = async () => {
    for (let i = 0; i < text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 200)); // Wait for 1 second
      setShowText(prevState => prevState + text[i]);
    }
  };

  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasAnimated.current) {
      animateText();
      hasAnimated.current = true;
    }
  }, []);

  return (
    <Typography variant="h3" sx={{ writingMode: 'vertical-lr', textOrientation: 'upright',  fontSize: "1.2rem", }}>
      {showText}
    </Typography>
  );
};

export default Scroll;


