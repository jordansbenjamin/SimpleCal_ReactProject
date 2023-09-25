export default function FilterContainer() {
	return (
		<section className="my-5 px-5">
			<div className="row g-3">
				<Filter filterType="Meals" />
				<Filter filterType="Workouts" />
			</div>
		</section>
	);
}

function Filter({ filterType }) {
	return (
		<div className="col-md-6">
			<div className="mt-3">
				<input className="p-2 w-100 border rounded" type="text" placeholder={`Filter ${filterType}...`}></input>
			</div>
		</div>
	);
}
