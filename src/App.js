import React from "react";
import {Route, Routes} from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

import Container from "react-bootstrap/Container";

import {
	faLightbulb,
	faPenToSquare,
	faDisplay,
	faCode,
	faBolt,
} from "@fortawesome/free-solid-svg-icons";

import {
	faLinkedin,
	faGithub
} from "@fortawesome/free-brands-svg-icons"

function App() {
	return (
		//? - background, Navigation and Container rendered on all pages
		<div className="app">
			<div className="background">
				<Container>
					<Navigation faBolt={faBolt} />
						<Routes>
							{/*//? Icons imported and passed through Home */}
							<Route path="/" element={<Home
									faLightbulb={faLightbulb}
									faPenToSquare={faPenToSquare}
									faDisplay={faDisplay}
									faCode={faCode}
								/>}/>
								<Route path="/about" element={<About  />} />
								<Route path="/projects" element={<Projects />} />
							<Route path="*" element={<NotFound />}/>
						</Routes>
					<Footer faLinkedin={faLinkedin} faGithub={faGithub}/>
				</Container>
			</div>
		</div>
	);
}

export default App;
