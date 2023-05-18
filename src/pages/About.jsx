import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../components/Profile";


const About = () => {
	return (
		<div id="about">
			<Row className="aboutContentRow">
				<Col className="aboutImgCol col-6">
					<Profile />
				</Col>
				<Col className="aboutContentCol col-6">
					<div>
						<p>
							Hi! My name is Tom and I am an aspiring Website Developer.
							Currently I am studying a double diploma at Holmesglen. This portfolio is currently a W.I.P and will be added to over my future career. If you would like to get in contact with me please feel free to message via the links below.
						</p>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default About;
