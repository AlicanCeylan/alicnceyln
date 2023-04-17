import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function MediaIcons() {
  const styles = {
    icon: {
      textDecoration: 'none',
      fontSize: '22px',
      padding: '10px',
      transition: '0.2s ease-in',
    },
  };

  return (
    <div className="mediaIcons" style={styles.mediaIcons}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/AlicanCeylan/"
      >
        <FaGithub />
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/alican-ceylan/"
      >
        <FaLinkedin />
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.instagram.com/dalefish_/"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default MediaIcons;
