
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedWrapper = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default AnimatedWrapper;
