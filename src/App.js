import React from 'react';
import PageRoutes from './components/PageRoutes';
import Header from './components/Header';

function App() {
  const personalData = {
    name: 'Alican Ceylan',
    location: 'Delaware, US',
    email: 'alicanceylan8@gmail.com',
    availability: 'Open for work',
  };

  return (
    <>
      <Header />
      <PageRoutes personalData={personalData} />
    </>
  );
}

export default App;
