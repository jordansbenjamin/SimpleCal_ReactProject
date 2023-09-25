import { ItemButton } from "./Buttons";

import { useState } from "react";
import { Button } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";

export default function ItemsContainer() {
	return (
		<section className="mx-5">
			<div className="row g-4">
				<Item subheading="Meals" itemName="Meal" btnType="primary" borderType="primary" />
				<Item subheading="Workouts" itemName="Workout" btnType="primary" borderType="primary" />
			</div>
		</section>
	);
}

function Item({ subheading, itemName, btnType, borderType }) {
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

// function CollapseItems({ btnName, btnType }) {
// 	const [open, setOpen] = useState(false);

// 	return (
// 		<>
// 			<ItemButton btnType={btnType} onClick={() => setOpen(!open)} aria-controls="collapse" aria-expanded={open}>
// 				<i className="bi bi-plus fs-6"></i>
// 				{btnName}
// 			</ItemButton>
// 			<Collapse in={open}>
// 				<div className="card card-body bg-light">
// 					<form>
// 						<div className="mb-3">
// 							<input type="text" className="form-control" placeholder="Enter meal..."></input>
// 						</div>
// 						<div className="mb-3">
// 							<input type="text" className="form-control" placeholder="Enter calories..."></input>
// 						</div>
// 						<Button>Add</Button>
// 					</form>
// 				</div>
// 			</Collapse>
// 		</>
// 	);
// }
