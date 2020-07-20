import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHtml5,
	faCss3Alt,
	faJsSquare,
	faSass,
	faReact,
} from '@fortawesome/free-brands-svg-icons';
import aboutMePic from '../../assets/images/etc/about-me-test.jpg';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
		<motion.div
			id="about"
			initial="out"
			animate="in"
			exit="out"
			variants={pageTransition}
		>
			<div className="about-me">
				<div className="title_about">
					<a href="/about">
						<h3>About Me</h3>
					</a>
				</div>
				<div className="content_about">
					<section className="about-1">
						<div className="about-picture">
							<img src={aboutMePic} alt="About-Me" />
						</div>
						<div className="about-description">
							<h4>
								<FormattedMessage id="about.title1" defaultMessage="About Me" />
							</h4>
							<p>
								<FormattedMessage id="about.text1" defaultMessage="About Me" />
							</p>
						</div>
					</section>
					<section className="about-2">
						<h4>
							<FormattedMessage id="about.title2" defaultMessage="About Me" />
						</h4>
						<div className="overview-tech">
							<FontAwesomeIcon icon={faHtml5} />
							<FontAwesomeIcon icon={faCss3Alt} />
							<FontAwesomeIcon icon={faJsSquare} />
							<FontAwesomeIcon icon={faSass} />
							<FontAwesomeIcon icon={faReact} />
						</div>
						<p>
							<FormattedMessage id="about.text2" defaultMessage="About Me" />
							<a href="mailto:goran.beljan@gmx.ch">goran.beljan@gmx.ch</a>
						</p>
					</section>
				</div>
				<section className="next-section">
					<Link to="/">
						<div>
							<h6>
								<FormattedMessage
									id="about.backToTop"
									defaultMessage="Back To Home"
								/>
								<div className="icon-up">
									<FontAwesomeIcon icon={faArrowUp} />
								</div>
							</h6>
						</div>
					</Link>
				</section>
			</div>
		</motion.div>
	);
};
export default AboutMe;
