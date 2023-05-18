import React from "react";

import Heading from "../components/Heading";
import InfoCard from "../components/InfoCard";
import Profile from "../components/Profile";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = (props) => {
	const { faLightbulb, faDisplay, faCode, faPenToSquare } = props;
	const infoArray = ["first", "second", "third", "fourth"];

	return (
		<div id="home">
			<Row className="headingRow">
				<Heading />
			</Row>
			<Row className="contentRow row-cols-2">
				<Row className="row-cols-2">
					{infoArray.map((id) => (
						<Col className="infoCol">
							<InfoCard
								id={id}
								faLightbulb={faLightbulb}
								faDisplay={faDisplay}
								faCode={faCode}
								faPenToSquare={faPenToSquare}
							/>
						</Col>
					))}
				</Row>
				<Col className="profileCol">
					<Profile />
				</Col>
			</Row>
		</div>
	);
};

export default Home;
