import Button from "react-bootstrap/Button";

export default function NavButton({ children }) {
	return (
		<>
			<Button className="mx-1">{children}</Button>
		</>
	);
}
