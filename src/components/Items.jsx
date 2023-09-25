import { ItemButton } from "./Buttons";

import { useState } from "react";
import { Button } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";

export default function ItemsContainer() {
	return (
		<section className="mx-5">
			<div className="row g-4">
				<ItemFormContainer subheading="Meals" itemName="Meal" btnType="primary" borderType="primary" />
				<ItemFormContainer subheading="Workouts" itemName="Workout" btnType="primary" borderType="primary" />
			</div>
		</section>
	);
}

function ItemFormContainer({ subheading, itemName, btnType, borderType }) {
	const [open, setOpen] = useState(false);

	return (
		<div className="col-md-6">
			{/* ITEM HEADING */}
			<div className="d-flex align-items-center">
				<h2 className={`border-start border-${borderType} border-3 p-2`}>{subheading}</h2>
				<ItemButton btnType={btnType} onClick={() => setOpen(!open)} aria-controls="collapse" aria-expanded={open}>
					<i className="bi bi-plus fs-6"></i>
					Add {itemName}
				</ItemButton>
			</div>

			<Item />

			{/* COLLAPSEABLE ELEMENT */}

			<Collapse in={open}>
				<div className="card card-body bg-light">
					<form>
						<div className="mb-3">
							<input type="text" className="form-control" placeholder={`Enter ${itemName}...`}></input>
						</div>
						<div className="mb-3">
							<input type="text" className="form-control" placeholder="Enter Calories..."></input>
						</div>
						<Button>Add</Button>
					</form>
				</div>
			</Collapse>
		</div>
	);
}

function Item() {
	return (
		<div>
			<div className="card my-2">
				<div className="card-body">
					<div className="d-flex align-items-center justify-content-between">
						<h3 className="mx-1">Breakfast</h3>
						<div className="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5">500</div>
						<Button className="delete btn btn-danger btn-sm mx-2">
							<i class="bi bi-x"></i>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
