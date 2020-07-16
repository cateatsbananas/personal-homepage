import React from 'react';

function ProjComp({
	src,
	src2,
	projName,
	projText,
	linkToProj,
	chipLink,
	projType,
	projTech,
	projHtml,
	projCss,
}) {
	return (
		<div className="project-container">
			<div className="project-header">
				<h6 className="project-name">{projName}</h6>
				<p className="project-text">{projText}</p>
			</div>
			<div className="project-body">
				<img className="project-img" src={src} alt="Project_image" />
			</div>
			<div className="project-overlay-wrapper"></div>
			<span className="project-overlay">
				<img className="project-img" src={src2} alt="Project_image" />
				<div className="overlay-elements">
					<div className="overlay-container">
						<h6 className="project-name">{projName}</h6>
						<div className="link-source-wrapper">
							<a href={linkToProj} target="_blank" rel="noopener noreferrer">
								<button className="link-source">Project</button>
							</a>
							<a href={chipLink} target="_blank" rel="noopener noreferrer">
								<button className="link-source">Source</button>
							</a>
						</div>
						<div className="project-info-wrapper">
							<div className="project-info">{projType}</div>
							<div className="project-info">{projTech}</div>
							<div className="project-info">{projHtml}</div>
							<div className="project-info">{projCss}</div>
						</div>
					</div>
				</div>
			</span>
		</div>
	);
}

export default ProjComp;
