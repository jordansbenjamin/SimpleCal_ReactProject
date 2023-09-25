import { ItemButton } from "./Buttons";

export default function ItemsContainer() {
	return (
		<section className="mx-5">
			<div className="row g-4">
				<Item subheading="Meals" btnName="Add Meal" btnType="primary" borderType="primary"/>
				<Item subheading="Workouts" btnName="Add Workout" btnType="primary" borderType="primary"/>
			</div>
		</section>
	);
}

function Item({ subheading, btnName, btnType, borderType }) {
	return (
		<div className="col-md-6">
			<div className="d-flex align-items-center">
				<h2 className={`border-start border-${borderType} border-3 p-2`}>{subheading}</h2>
				<ItemButton btnType={btnType}>
					<i className="bi bi-plus fs-4"></i>
					{btnName}
				</ItemButton>
			</div>
		</div>
	);
}
