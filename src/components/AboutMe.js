import React from 'react';
import selfPortrait from '../images/selfPortrait.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MediaIcons from '../components/MediaIcons';

function AboutMe({ name, email, location, availability }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="aboutContainer">
      <motion.div
        className="selfPortrait col-12 col-lg-4"
        ref={ref}
        initial={{ x: '-10vw', opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: '-10vw', opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <img src={selfPortrait} alt={name} />
      </motion.div>
      <motion.div
        className="personalInfo col-12 col-lg-8"
        ref={ref}
        initial={{ x: '10vw', opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: '10vw', opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="contentContainer">
          <h4>Hey! I'm Alican Ceylan</h4>
          <div className="contentDescription">
            <p>
              I have an Associate of Applied Science in Computer Information
              Systems from <i>Delaware Technical Community College</i> and I am
              currently pursuing a Bachelor of Science in Software Engineering
              at
              <i> Capitol Technology University</i>. I am looking to start a
              career as a developer, whether it is a website, business software,
              or automation systems, I know I'd do an outstanding job.
            </p>
            <br />
            <p>
              I like to learn, build things, be outside, and occasionally play
              video games.
            </p>
            <br />
            <p>
              If you would like to see my experience and skills, feel free to
              check out my LinkedIn below.
            </p>
          </div>
          <div className="infoContainer">
            <div className="row">
              <div className="col-12 col-md-6 info">
                <span>Name:</span>
                <p>Alican Ceylan</p>
              </div>
              <div className="col-12 col-md-6 info">
                <span>Email:</span>
                <p>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 info">
                <span>Location:</span>
                <p>{location}</p>
              </div>
              <div className="col-12 col-md-6 info">
                <span>Availability:</span>
                <p>{availability}</p>
              </div>
            </div>
          </div>
          <div className="buttonContainer">
            <MediaIcons />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
