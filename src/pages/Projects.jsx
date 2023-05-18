import React from "react";

import Row from "react-bootstrap/Row";

const Projects = () => {
	return (
		<div className="projects">
			<h3>Click the project title to the the Github Repo </h3>
			<Row className="project1Row">
				<a href="https://github.com/TomJoeyPolites/Tom_Polites_CRS180_JavaScript" rel="noreferrer noopener" target="_blank">
					<h4>SC Coin</h4>
				</a>
				<div className="projectImg"></div>
				<p>SC Coin was my very first attempt at a web application using HTML, CSS and JavaScript using the CoinBase API.</p>
			</Row>
			<Row className="project2Row">
				<a href="https://github.com/TomJoeyPolites/AFL-Info-Webapp" rel="noreferrer noopener" target="_blank">
					<h4>White Line Fever</h4>
				</a>
				<div className="projectImg"></div>
				<p>White Line Fever is a AFL informational web application using React. The information is provided by the Sqiggle API and provides information on all games, standing and current power rankings for the Australian Football League.</p>
			</Row>
		</div>
	);
};

export default Projects;