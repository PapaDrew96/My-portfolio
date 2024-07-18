import React from 'react';
import styled from 'styled-components';
import AnimatedWrapper from '../AnimatedWrapper'; // Import the AnimatedWrapper component

// Styled component for the skills wrapper
const SkillsWrapper = styled.div`
  padding: 20px;
  text-align: center; /* Center the text for better alignment */
  
  h1 {
    margin-bottom: 20px;
    font-family: 'Anton', sans-serif; /* Use Anton font for headings */
    color: #fff; /* Adjust color to match your design */
    font-size: 2rem; /* Adjust font size as needed */
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    background: #f4f4f4;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Default shadow */
    transition: all 0.3s ease; /* Smooth transition for hover effect */
    font-family: 'Roboto Mono', monospace; /* Use Roboto Mono font for skills */
    font-size: 1.2rem; /* Adjust font size as needed */
    color: #333; /* Adjust color to match your design */

    &:hover {
      background: #fff;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); /* Enhanced shadow on hover */
      transform: scale(1.05); /* Slight scale effect on hover */
    }
  }
`;

const skillsData = [
  'JavaScript',
  'jQuery',
  'React',
  'WordPress', 
  'CSS',
  'HTML',
  'GitHub',
  'RESTful APIs',
  'Node.Js'
];

const Skills = () => (
  <AnimatedWrapper>
    <SkillsWrapper>
      <h1>My Skills</h1>
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </SkillsWrapper>
  </AnimatedWrapper>
);

export default Skills;
