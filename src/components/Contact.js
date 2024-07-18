import React from 'react';
import styled from 'styled-components';
import AnimatedWrapper from '../AnimatedWrapper'; // Ensure to import the AnimatedWrapper component
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import social media icons
import seaImage from '../images/sea.jpg'; // Import the background image

// Styled component for the Contact container
const ContactWrapper = styled.div`
  min-height: 100vh; /* Ensure the wrapper covers the entire viewport height */
  padding: 20px;
  text-align: center;
  background-image: url(${seaImage}); /* Background image */
  background-size: cover; /* Cover the entire area */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Avoid repeating the image */
  color: #fff; /* Ensure text color is readable on the background */
  position: relative; /* Positioning for overlay effect */

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Black overlay with transparency */
    z-index: -1; /* Place the overlay behind the content */
    filter: grayscale(100%); /* Black and white effect */
    background-blend-mode: overlay; /* Ensure overlay blends with the background image */
  }

  h1 {
    margin-bottom: 20px;
    font-family: 'Anton', sans-serif; /* Use Anton font for headings */
    color: #fff; /* White text color for headings */
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      padding: 0;
    }
  }

  li {
    margin: 10px 0;
    font-size: 1.2rem;
    color: #fff; /* White text color for list items */
    font-family: 'Roboto Mono', monospace; /* Use Roboto Mono font for list items */
    display: flex;
    align-items: center;
    justify-content: center; /* Center-align items horizontally */
    flex-wrap: wrap;
    text-align: left;
    width: 100%;
    max-width: 500px;
    overflow-wrap: break-word; /* Handle long words */
    word-break: break-word; /* Break long words */

    @media (max-width: 768px) {
      font-size: 1rem;
      max-width: 100%;
      text-align: center;
    }

    .icon {
      margin-left: 8px;
      font-size: 1.5rem;
      color: #fff; /* White color for icons */
      cursor: pointer;
      display: none; /* Hide icons by default */

      @media (max-width: 768px) {
        display: inline; /* Show icons on smaller screens */
      }
    }

    .link {
      color: #fff; /* White text color for links */
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      @media (max-width: 768px) {
        display: none; /* Hide links on smaller screens */
      }
    }
  }
`;

// List of contact information with icons
const contactInfo = [
  { label: 'Email', value: 'a.karaleftheris@outlook.com' },
  { label: 'Phone', value: '+30-6971531121' },
  { label: 'Location', value: 'Athens, Greece' },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/andreas-karaleftheris-876186241/',
    icon: <FaLinkedin className="icon" />
  },
  {
    label: 'GitHub',
    value: 'https://github.com/PapaDrew96',
    icon: <FaGithub className="icon" />
  },
];

const Contact = () => {
  const handleIconClick = (url) => {
    window.location.href = url; // Navigate to the link
  };

  return (
    <AnimatedWrapper>
      <ContactWrapper>
        <h1>Contact Information</h1>
        <ul>
          {contactInfo.map((info, index) => (
            <li key={index}>
              <strong>{info.label}:</strong>
              {info.icon && (
                <span
                  className="icon"
                  onClick={() => handleIconClick(info.value)}
                  aria-label={info.label}
                >
                  {info.icon}
                </span>
              )}
              {info.label !== 'LinkedIn' && info.label !== 'GitHub' ? (
                <span>{info.value}</span>
              ) : (
                <a
                  href={info.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {info.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </ContactWrapper>
    </AnimatedWrapper>
  );
};

export default Contact;
