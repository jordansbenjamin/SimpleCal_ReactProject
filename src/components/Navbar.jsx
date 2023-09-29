import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavButton from "./Buttons";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function NavbarHeader({ onSetDailyLimit, onReset }) {
	const [show, setShow] = useState(false);
	const [calories, setCalories] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function handleSubmit(e) {
		e.preventDefault();

		if (!calories) return;

		onSetDailyLimit(calories);

		setCalories("");
		setShow(!show);
	}

	return (
		<Navbar expand="lg" className="bg-body-secondary">
			<Container>
				<Navbar.Brand href="#home" className="fs-1 fw-bold">
					🧘🏽‍♂️ Simple Cal
				</Navbar.Brand>
				<Nav className="ms-auto">
					<NavButton handler={handleShow}>Set Daily Limit</NavButton>
					<NavButton handler={onReset} btnType="btn-danger">
						Reset
					</NavButton>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Set Daily Limit</Modal.Title>
						</Modal.Header>
						<Form className="mx-3 my-3" onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Daily Calorie Limit</Form.Label>
								<Form.Control
									value={calories}
									onChange={(e) => setCalories(+e.target.value)}
									type="text"
									placeholder="Some calorie..."
									autoFocus
								/>
							</Form.Group>
						</Form>
						<Modal.Footer>
							<Button type="submit" variant="primary">
								Save Changes
							</Button>
						</Modal.Footer>
					</Modal>
				</Nav>
			</Container>
		</Navbar>
	);
}
