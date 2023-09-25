export default function DisplayStats() {
	return (
		<div className="my-5 px-5">
			<div className="row g-3 my-3 text-center">
				<Stat type="Daily Calorie Limit ⚖️" amount={2000} containerClass="col-md-6" statClass="bg-dark text-white" />
				<Stat type="Gain/Loss 📈" amount={0} containerClass="col-md-6" statClass="bg-success text-white" />
			</div>
			<div className="row g-3 text-center">
				<Stat type="Calories Consumed 🌯" amount={0} containerClass="col-md-4" statClass="card bg-light" />
				<Stat type="Calories Burned 🔥" amount={0} containerClass="col-md-4" statClass="card bg-light" />
				<Stat type="Calories remaining ⏳" amount={2000} containerClass="col-md-4" statClass="card bg-light" />
			</div>
		</div>
	);
}

function Stat({ type, amount, containerClass, statClass }) {
	return (
		<div className={containerClass}>
			<div className={`card ${statClass}`}>
				<div className="fs-1 fw-bold">{amount}</div>
				<p className="fs-4">{type}</p>
			</div>
		</div>
	);
}
