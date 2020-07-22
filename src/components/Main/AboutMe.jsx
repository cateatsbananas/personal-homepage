import React from 'react';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHtml5,
	faCss3Alt,
	faJsSquare,
	faSass,
	faReact,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import aboutMePic from '../../assets/images/etc/about-me-test.jpg';

const pageTransition = {
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
};

const AboutMe = () => {
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
							<div className="icon-tech">
								<FontAwesomeIcon icon={faHtml5} />
								<span className="icon-tooltip">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Odio, non.
								</span>
							</div>
							<div className="icon-tech">
								<FontAwesomeIcon icon={faCss3Alt} />
								<span className="icon-tooltip">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Odio, non.
								</span>
							</div>

							<div className="icon-tech">
								<FontAwesomeIcon icon={faJsSquare} />
								<span className="icon-tooltip">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Odio, non.
								</span>
							</div>
							<div className="icon-tech">
								<FontAwesomeIcon icon={faSass} />
								<span className="icon-tooltip">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Odio, non.
								</span>
							</div>
							<div className="icon-tech">
								<FontAwesomeIcon icon={faReact} />
								<span className="icon-tooltip">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Odio, non.
								</span>
							</div>
							<div className="icon-tech">
								<FontAwesomeIcon icon={faWordpress} />
								<span className="icon-tooltip">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Odio, non.
								</span>
							</div>
						</div>
						<p>
							<FormattedMessage id="about.text2" defaultMessage="About Me" />
						</p>
					</section>
				</div>
			</div>
		</motion.div>
	);
};
export default AboutMe;
