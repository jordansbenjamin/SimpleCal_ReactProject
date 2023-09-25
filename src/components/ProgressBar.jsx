import ProgressBar from "react-bootstrap/ProgressBar";

export default function ProgBarComp() {
	return (
		<div className="my-5 px-5">
			<ProgressBar now={50}/>
		</div>
	);
}
