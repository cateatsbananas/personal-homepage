import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faAt } from '@fortawesome/free-solid-svg-icons';

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const AboutMe = () => {
  const [iconOpen, setIconOpen] = useState(false);
  const [iconOpen2, setIconOpen2] = useState(false);

  return (
    <motion.div id="about" initial="out" animate="in" exit="out" variants={pageTransition}>
      <div className="about-me">
        <div className="title_about">
          <h3>About Me</h3>
        </div>
        <div className="content_about">
          <div className="about-1">
            <div className={iconOpen ? 'section-active' : ''}>
              <button className="icon" onClick={() => setIconOpen(!iconOpen)}>
                <FontAwesomeIcon icon={faAddressCard} />
              </button>
              <h4>
                <FormattedMessage id="about.title1" defaultMessage="About Me" />
              </h4>
              <p>
                <FormattedMessage id="about.text1" defaultMessage="About Me" />
              </p>
            </div>
          </div>
          <div className="about-2">
            <div className={iconOpen2 ? 'section-active-two' : ''}>
              <button className="icon" onClick={() => setIconOpen2(!iconOpen2)}>
                <FontAwesomeIcon icon={faAt} />
              </button>
              <h4>
                <FormattedMessage id="about.title2" defaultMessage="About Me" />
              </h4>
              <p>
                <FormattedMessage id="about.text2" defaultMessage="About Me" />
              </p>
            </div>
          </div>
        </div>
        <div className="next-section">
          <Link to="/">
            <div>
              <h6>
                <FormattedMessage id="about.backToTop" defaultMessage="Back To Top" />
              </h6>
              <KeyboardArrowUpIcon />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default AboutMe;
