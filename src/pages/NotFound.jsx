import React from 'react'
import Row from "react-bootstrap/Row";

const NotFound = () => {
    return (
        <div className="notFound">
            <Row>
                <h2>404: Page Not Found</h2>
            </Row>
            <Row>
                <p>
                    This page does not exist or is a work in progress.
                    <br />
                    Please return to a page found above by clicking on one of the navbar links.
                </p>
            </Row>
        </div>
    )
}

export default NotFound