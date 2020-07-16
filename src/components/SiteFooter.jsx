import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const SiteFooter = () => {
	return (
		<div className="footer">
			<div className="footer-nav">
				<nav className="navigation">
					<ul className="navigation-content">
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
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default SiteFooter;
