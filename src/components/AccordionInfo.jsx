import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { AccordionContext } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function ContextAwareToggle({ children, eventKey, callback }) {
	const { activeEventKey } = useContext(AccordionContext);

	const decoratedOnClick = useAccordionButton(
		eventKey,
		() => callback && callback(eventKey)
	);

	const isCurrentEventKey = activeEventKey === eventKey;

	return (
		<div
			className="iconButton"
			style={{ color: isCurrentEventKey ? "#ffff00" : "" }}
			onClick={decoratedOnClick}>
			{" "}
			{children}
		</div>
	);
}

const AccordionInfo = (props) => {
	const { icon, content } = props;

	return (
		<Accordion flush>
			<ContextAwareToggle eventKey="0">{icon}</ContextAwareToggle>

			<Accordion.Collapse eventKey="0">
				<div>{content}</div>
			</Accordion.Collapse>

		</Accordion>
	);
};

export default AccordionInfo;
