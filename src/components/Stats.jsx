export default function DisplayStats({dailyLimit, caloriesConsumed, caloriesBurned, caloriesRemaining, gainLoss}) {
	return (
		<div className="my-5 px-5">
			<div className="row g-3 my-3 text-center">
				<Stat type="Daily Calorie Limit ⚖️" amount={dailyLimit} containerClass="col-md-6" statClass="bg-dark text-white" />
				<Stat type="Gain/Loss 📈" amount={gainLoss} containerClass="col-md-6" statClass={`bg-${gainLoss > 0 ? 'success' : 'danger'} text-white`} />
			</div>
			<div className="row g-3 text-center">
				<Stat type="Calories Consumed 🌯" amount={caloriesConsumed} containerClass="col-md-4" statClass="card bg-light" />
				<Stat type="Calories Burned 🔥" amount={caloriesBurned} containerClass="col-md-4" statClass="card bg-light" />
				<Stat type="Calories remaining ⏳" amount={caloriesRemaining} containerClass="col-md-4" statClass="card bg-light" />
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
