import React from 'react'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
    const { faLinkedin, faGithub } = props
    return (
        <div><Row className="linkRow">
            <Col>
                <a href="https://www.linkedin.com/in/tom-polites-418318156/" rel="noreferrer noopener" target="_blank" >
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </a>
                <a href="https://github.com/TomJoeyPolites/" rel="noreferrer noopener" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                </a>

            </Col>
        </Row></div>
    )
}

export default Footer