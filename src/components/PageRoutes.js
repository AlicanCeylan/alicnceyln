import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';

const PageRoutes = ({ personalData }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home name={personalData.name} />} />
      <Route
        path="/about"
        element={
          <About
            name={personalData.name}
            location={personalData.location}
            email={personalData.email}
            availability={personalData.availability}
            summary={personalData.summary}
          />
        }
      />
    </Routes>
  );
};

export default PageRoutes;
