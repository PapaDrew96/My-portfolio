// pages/About.js
import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from '../images/image.jpg'; // Replace with the correct path to your image
import AnimatedWrapper from '../AnimatedWrapper';

// Global styles for importing fonts and general resets
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&display=swap');

  /* Reset default margin and padding */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Mono', monospace; /* Apply font globally */
  }
`;

// Keyframes for falling animation
const fallFromAbove = `
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled component for the heading
const Heading = styled.h1`
  height: 20vh;
  margin-bottom: 15px;
  font-size: 3rem;
  color: #fff; 
  animation: ${fallFromAbove} 1s ease-out forwards; /* Animation applied */

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }
`;

// Styled component for paragraphs
const Paragraph = styled.p`
  margin-bottom: 20px;
  line-height: 1.6;
  color: #fff; 
  font-size: 1.7em;
  text-align: justify;
  padding: 20px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease; /* Smooth transition for border color */
  font-weight: bolder;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(102, 102, 102, 0.5); /* Transparent white background */
    z-index: -1; /* Behind the text */
  }

  @media (max-width: 768px) {
    font-size: 1.2em; /* Adjust font size for smaller screens */
    padding: 15px; /* Adjust padding for smaller screens */
  }
`;

// Styled component for static paragraph with specific ID
const StaticParagraph = styled(Paragraph)`
 background-color: rgba(102, 102, 102, 0.5); 
  font-weight: bolder;
  color: #fff;
`;

// Component for the blinking effect
const BlinkingText = ({ phrases }) => {
  const [text, setText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // Track typing state

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const typeEffect = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting && charIndex <= currentPhrase.length) {
        setText(currentPhrase.substring(0, charIndex) + '|'); // Adding a cursor
        charIndex++;
        timer = setTimeout(typeEffect, 200); // Typing speed (adjust this value)
      } else if (isDeleting && charIndex >= 0) {
        setText(currentPhrase.substring(0, charIndex) + '|'); // Adding a cursor
        charIndex--;
        timer = setTimeout(typeEffect, 100); // Deleting speed (adjust this value)
      } else {
        if (!isDeleting) {
          // Finished typing
          isDeleting = true;
          timer = setTimeout(typeEffect, 3000); // Pause before deleting
        } else {
          // Finished deleting
          isDeleting = false;
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length); // Cycle to the next phrase
          charIndex = 0;
          timer = setTimeout(typeEffect, 500); // Pause before typing new phrase
        }
      }
    };

    typeEffect();

    return () => {
      clearTimeout(timer); // Clean up on unmount
    };
  }, [phrases, currentPhraseIndex]);

  return <span>{text}</span>;
};

// Styled component for the main wrapper
const AboutWrapper = styled.div`
  font-family: 'Roboto Mono', monospace;
  background-color: #282c34; /* Adjust background color */
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 0; /* Remove border-radius for full page background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%; /* Ensure the wrapper takes full width */
  min-height: 100vh; /* Ensure the wrapper takes full viewport height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; /* Center align text content */
  color: #fff; /* Text color against the background */
  overflow: hidden; /* Ensure no overflow */

  @media (max-width: 768px) {
    padding: 20px; /* Adjust padding for smaller screens */
    background-size: contain; /* Ensure the background image is fully visible */
  }
`;

// Main About component
const About = () => (
  <AnimatedWrapper>
    <AboutWrapper>
      <GlobalStyles /> {/* Apply global styles here */}
      <Heading>About Me</Heading>
      <StaticParagraph id='staticParagraph'>
        Hi, I'm Andreas, A passionate Web Developer dedicated to crafting engaging user experiences. With a love for technology and an eye for design, I specialize in bringing creative concepts to life through clean, efficient code. I have a strong foundation in HTML, CSS, and JavaScript, and I am currently investing my time learning frameworks like React. My journey in front-end development has been driven by my curiosity and desire to solve real-world problems, ensuring that each project I work on is not just visually appealing but also user-friendly and accessible.
      </StaticParagraph>
      <Paragraph>
        When I'm not coding, you can find me{' '}
        <BlinkingText phrases={['playing guitar.', 'fishing.', 'playing basketball.', 'playing piano.', 'playing bass.', 'cooking.']} />
      </Paragraph>
    </AboutWrapper>
  </AnimatedWrapper>
);

export default About;
