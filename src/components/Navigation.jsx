import React from "react";
import { NavLink } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = (props) => {
	const { faBolt } = props;
	return (
		<>
			<Row className="navigationRow">

				<Navbar>
					<Navbar.Brand>
						<NavLink to="/">
							Tom <FontAwesomeIcon icon={faBolt} size="sm" /> Polites
						</NavLink>
					</Navbar.Brand>
					<Nav>
						<NavLink to="/about">
							about.
						</NavLink>
						<NavLink to="/projects">
							projects.
						</NavLink>
					</Nav>
				</Navbar>
			</Row>
		</>
	);
};

export default Navigation;