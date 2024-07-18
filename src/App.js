import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import AppRoutes from './Routes';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <Router> 
      <ErrorBoundary>
        <div className="App">
          <GlobalStyle />
          <Navbar />
          <AppRoutes />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
