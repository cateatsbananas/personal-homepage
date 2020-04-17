import React, { useContext } from 'react';
import { ToggleContext } from '../ToggleStateContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import NextSection from '../NextSection';
import { motion } from 'framer-motion';

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

library.add(faLinkedin, faGithubSquare, faCodepen);

const Home = () => {
  const [navOpen, setNavOpen] = useContext(ToggleContext);

  return (
    <motion.div id="home" initial="out" animate="in" exit="out" variants={pageTransition}>
      <div className="title" onClick={() => (navOpen ? setNavOpen(false) : navOpen === false)}>
        <h1 className="lg-heading">
          <FormattedMessage id="title.title" defaultMessage="Portfolio" />
        </h1>
        <div className="icons">
          <a href="/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </div>
        <div>
          <h3 className="sm-heading">
            <FormattedMessage id="title.subTitle" defaultMessage="Frontend Development" />
          </h3>
          <p className="sm-heading">
            <FormattedMessage id="title.introduction" defaultMessage="Introduction Text" />
          </p>
          <Link to="/projects">
            <NextSection name={<FormattedMessage id="title.next" defaultMessage="Projects" />} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
