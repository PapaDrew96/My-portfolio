import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { HiMenuAlt3 } from 'react-icons/hi'; // Import burger icon from react-icons
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon from react-icons

// Styled component for the Navbar container
const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #333; /* Dark background color */
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center; /* Center content on larger screens */
  align-items: center;
  
  @media (max-width: 768px) {
    justify-content: space-between; /* Adjust for smaller screens */
    padding: 10px;
  }
`;

// Styled component for the burger icon
const BurgerIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  cursor: pointer;
  color: #fff;
  font-size: 2rem;

  @media (min-width: 769px) {
    display: none; /* Hide burger icon on larger screens */
  }
`;

// Styled component for the close icon
const CloseIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  margin-left: auto;
  padding: 10px;

  @media (min-width: 769px) {
    display: none; /* Hide close icon on larger screens */
  }
`;

// Styled component for the Navbar list
const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: absolute;
    top: 60px; /* Adjust based on the height of the navbar */
    left: 0;
    background-color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

// Styled component for the Navbar list item
const NavbarItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

// Styled component for the Navbar links
const NavbarLink = styled(Link)`
  color: #fff; /* White text color */
  text-decoration: none;
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #555; /* Slightly lighter background on hover */
    color: #fff;
  }

  &.active {
    background-color: #fff; /* White background for active link */
    color: #333; /* Dark text color for active link */
  }
`;

// Navbar component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  // Close the menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <NavbarContainer>
      <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(true)}>
        <HiMenuAlt3 />
      </BurgerIcon>
      <CloseIcon isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <AiOutlineClose />
      </CloseIcon>
      <NavbarList isOpen={isOpen}>
        <NavbarItem>
          <NavbarLink to="/">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/about">About</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/projects">Projects</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/skills">Skills</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
