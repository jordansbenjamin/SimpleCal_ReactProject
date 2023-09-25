import Button from "react-bootstrap/Button";

export default function NavButton({ children }) {
	return (
		<>
			<Button className="mx-1">{children}</Button>
		</>
	);
}

export function ItemButton({ children, btnType }) {
	return (
		<>
			<Button className={`btn-${btnType} btn-sm ms-auto text-white fw-bold py-2 px-3 h-100`}>{children}</Button>
		</>
	);
}
