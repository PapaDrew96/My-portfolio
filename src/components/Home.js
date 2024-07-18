// pages/Home.js
import React from 'react';
import styled from 'styled-components';
import profileImage from '../images/profile.jpg'; // Adjust the path as necessary
import backgroundImage from '../images/fog.jpg'; // Adjust the path as necessary
import AnimatedWrapper from '../AnimatedWrapper';

// Styled component for the main container
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(${backgroundImage}) center/cover no-repeat,
    rgba(0, 0, 0, 0.5); /* Adding a transparent overlay */
  background-blend-mode: overlay; /* Blend the background image with the overlay */
  padding: 20px;
  text-align: center;
`;

// Styled component for the profile image
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 4px solid #333; /* Optional: Add a border around the image */
  object-fit: cover; /* Ensure the image covers the area */
`;

// Styled component for the heading
const HomeHeading = styled.h1`
  font-size: 3rem;
  color: #fff; /* Change color to stand out against the dark background */
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Styled component for the paragraph
const HomeParagraph = styled.p`
  font-size: 1.5rem;
  color: #ddd; /* Change color to stand out against the dark background */
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Home = () => {
  return (
    <AnimatedWrapper>
      <HomeContainer>
        <ProfileImage src={profileImage} alt="Profile" />
        <HomeHeading>Welcome to My Portfolio</HomeHeading>
        <HomeParagraph>Hi, I'm Andreas, an enthusiastic Web Developer</HomeParagraph>
      </HomeContainer>
    </AnimatedWrapper>
  );
};

export default Home;
