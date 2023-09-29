export default function FilterContainer({onFilter}) {
	return (
		<section className="my-5 px-5">
			<div className="row g-3">
				<Filter filterType="Meals" onFilter={onFilter}/>
				<Filter filterType="Workouts" onFilter={onFilter}/>
			</div>
		</section>
	);
}

function Filter({ filterType, onFilter }) {
	return (
		<div className="col-md-6">
			<div className="mt-3">
				<input className="p-2 w-100 border rounded" type="text" placeholder={`Filter ${filterType}...`} onChange={(e) => onFilter(e, filterType)}></input>
			</div>
		</div>
	);
}
