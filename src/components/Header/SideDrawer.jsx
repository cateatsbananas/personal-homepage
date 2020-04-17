import React, { useContext } from 'react';
import { ToggleContext, ButtonContext } from '../ToggleStateContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faCodepen } from '@fortawesome/free-brands-svg-icons';
import LanguageSelect from '../LanguageSelect';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

library.add(faLinkedin, faGithubSquare, faCodepen);

const SideDrawer = () => {
  const [navOpen, setNavOpen] = useContext(ToggleContext);
  const [isOpen, setOpen] = useContext(ButtonContext);
  return (
    <div className={navOpen ? 'active' : ''}>
      <nav
        className="sideDrawer"
        onClick={() => {
          if (navOpen) {
            setNavOpen(false);
            setOpen(false);
          } else {
            navOpen = false;
            isOpen = false;
          }
        }}
      >
        <ul>
          <div>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/projects">
              <li>
                <FormattedMessage id="nav.projects" defaultMessage="Projects" />
              </li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <div className="logo_links">
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
            <div className="language-select">
              <LanguageSelect />
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
