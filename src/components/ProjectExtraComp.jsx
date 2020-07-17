import React from 'react';

function ProjCompExtra({
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
		<div className="project-extra-container">
			<div className="project-extra-header">
				<h6 className="project-extra-name">{projName}</h6>
				<p className="project-extra-text">{projText}</p>
			</div>
			<div className="project-extra-body">
				<img className="project-extra-img" src={src} alt="Project_image" />
			</div>
			<div className="project--extra-overlay-wrapper"></div>
			<span className="project-extra-overlay">
				<img className="project-extra-img" src={src2} alt="Project_image" />
				<div className="overlay-extra-elements">
					<div className="overlay-extra-container">
						<h6 className="project-extra-name">{projName}</h6>
						<div className="link-extra-source-wrapper">
							<a href={linkToProj} target="_blank" rel="noopener noreferrer">
								<button className="link-extra-source">Project</button>
							</a>
							<a href={chipLink} target="_blank" rel="noopener noreferrer">
								<button className="link-extra-source">Source</button>
							</a>
						</div>

						<div className="project-extra-info-wrapper">
							<div className="project-extra-info">
								{projType
									? projType.map((type, index) => {
											return <div key={index}>{type}</div>;
									  })
									: 'Coming Soon'}
							</div>
						</div>
					</div>
				</div>
			</span>
		</div>
	);
}

export default ProjCompExtra;
