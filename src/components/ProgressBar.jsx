import ProgressBar from "react-bootstrap/ProgressBar";

export default function ProgBarComp({progress}) {
	return (
		<div className="my-5 px-5">
			<ProgressBar now={progress}/>
		</div>
	);
}
