import React from 'react';
import { Helmet } from 'react-helmet';
import Typewriter from 'typewriter-effect';
import MediaIcons from '../../components/MediaIcons';

const Home = ({ name }) => {
  const styles = {
    home: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      letterSpacing: '1px',
      textAlign: 'center',
      zIndex: '1',
      color: '#fff',
      textShadow: '1px 1px 3px #000',
    },
    name: {
      color: '#fff',
      fontWeight: '700',
      marginTop: '-100px',
      paddingBottom: '28px',
    },
    description: {
      fontWeight: '200',
    },
  };

  return (
    <section className="home" style={styles.home}>
      <Helmet>
        <title>Alican Ceylan - Home</title>
        <meta name="description" content="The landing page for Alican's Site" />
      </Helmet>
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description" style={styles.description}>
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(60)
                .typeString("I'm a developer looking to bring ideas to reality")
                .start();
            }}
          />
        </div>
      </div>
      <MediaIcons />
    </section>
  );
};

export default Home;
