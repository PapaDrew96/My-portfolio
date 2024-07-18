import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import AnimatedWrapper from '../AnimatedWrapper'; // Ensure to import the AnimatedWrapper component

// Import images from the src/images folder
import iconsImg from '../images/icons.jpg'; // Adjust path based on your directory structure
import timeImg from '../images/time.jpg';
import noteImg from '../images/note.jpg';

// Styled component for the projects container
const ProjectsWrapper = styled.div`
  padding: 20px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
    font-family: 'Anton', sans-serif; /* Use Anton font for headings */
    color: #fff; /* Adjust color to match your design */
    font-size: 2rem; /* Adjust font size as needed */
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-items: center;
  }

  .project-card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: all 0.3s ease;
    width: 300px; /* Fixed width */
    height: 400px; /* Fixed height */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Space out content evenly */

    img {
      width: 100%;
      height: 60%; /* Occupy 60% of the card height */
      object-fit: cover; /* Maintain aspect ratio and cover area */
    }

    h2 {
      margin: 10px;
      font-family: 'Roboto Mono', monospace; /* Use Roboto Mono font for project titles */
      font-size: 1.5rem;
      color: #333;
    }

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
      transform: scale(1.05);
    }
  }
`;

// List of projects with imported image paths
const projects = [
  {
    title: 'Weather App',
    url: 'https://papadrew-weather-app.vercel.app/',
    imgSrc: iconsImg, // Use imported image
  },
  {
    title: 'Time Capsule',
    url: 'https://papa-drew-time-capsule.vercel.app/',
    imgSrc: timeImg, // Use imported image
  },
  {
    title: 'Task Manager',
    url: 'https://task-manager-rust-six.vercel.app/',
    imgSrc: noteImg, // Use imported image
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AnimatedWrapper>
      <ProjectsWrapper ref={ref}>
        {inView && (
          <>
            <h1>My Projects</h1>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <a href={project.url} target="_blank" rel="noopener noreferrer" key={index}>
                  <div className="project-card">
                    <img src={project.imgSrc} alt={project.title} />
                    <h2>{project.title}</h2>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </ProjectsWrapper>
    </AnimatedWrapper>
  );
};

export default Projects;
