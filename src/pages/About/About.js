import React from 'react';
import { Helmet } from 'react-helmet';
import AboutMe from '../../components/AboutMe';

const About = ({ name, location, summary, email, availability }) => {
  return (
    <section className="about">
      <Helmet>
        <title>Alican Ceylan - About</title>
        <meta name="description" content="Who am I?" />
      </Helmet>
      <AboutMe
        name={name}
        location={location}
        summary={summary}
        email={email}
        availability={availability}
      />
    </section>
  );
};

export default About;
