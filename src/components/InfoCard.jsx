import React from "react";
import AccordionInfo from "./AccordionInfo.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = (props) => {
	const { id, faLightbulb, faDisplay, faCode, faPenToSquare } = props;
	let icon;
	let content;

	//! case
	if (id === "first") {
		icon = (
			<div>
				<FontAwesomeIcon icon={faLightbulb} size="2xl" />
				<h3>Solutions</h3>
			</div>
		);
	}

	if (id === "second") {
		icon = (
			<div>
				<FontAwesomeIcon icon={faPenToSquare} size="2xl" />
				<h3>Planning</h3>
			</div>
		);
	}

	if (id === "third") {
		icon = (
			<div>
				<FontAwesomeIcon icon={faCode} size="2xl" />
				<h3>Web Apps</h3>
			</div>
		);
	}

	if (id === "fourth") {
		icon = (
			<div>
				<FontAwesomeIcon icon={faDisplay} size="2xl" />
				<h3>Deployment</h3>
			</div>
		);
	}

	if (id === "first") {
		content = (
			<p>Providing valuable and functional solutions for your business</p>
		);
	}

	if (id === "second") {
		content = (
			<p>Developing procedures and timeline of your new application</p>
		);
	}

	if (id === "third") {
		content = (
			<p>Creating all your online business web application needs</p>
		);
	}

	if (id === "fourth") {
		content = (
			<p>Establishing and deploying your application for a successful launch</p>
		);
	}

	return (
		<div id={id} className="infoCard">
			<AccordionInfo icon={icon} content={content} />
		</div>
	);
};

export default InfoCard;
