import { ItemButton } from "./Buttons";

import { useState } from "react";
import { Button } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";

export default function ItemsContainer({ meals, workouts, handleAddMeals, handleAddWorkouts, onRemoveMeal }) {
	return (
		<section className="mx-5">
			<div className="row g-4">
				<ItemFormContainer
					onAdditems={handleAddMeals}
					onRemoveMeal={onRemoveMeal}
					subheading="Meals"
					itemType="Meal"
					btnType="primary"
					borderType="primary"
					items={meals}
				/>
				<ItemFormContainer
					onAdditems={handleAddWorkouts}
					subheading="Workouts"
					itemType="Workout"
					btnType="primary"
					borderType="primary"
					items={workouts}
				/>
			</div>
		</section>
	);
}

function ItemFormContainer({ subheading, itemType, btnType, borderType, onAdditems, items, onRemoveMeal }) {
	const [open, setOpen] = useState(false);
	const [itemName, setItemName] = useState("");
	const [calories, setCalories] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		if (!itemName || !calories) return;

		const id = crypto.randomUUID();

		const newItem = {
			itemName,
			calories,
			id,
		};

		console.log(newItem);

		onAdditems(newItem);

		setItemName("");
		setCalories("");
		setOpen(!open);
	}

	return (
		<div className="col-md-6">
			{/* ITEM HEADING */}
			<div className="d-flex align-items-center">
				<h2 className={`border-start border-${borderType} border-3 p-2`}>{subheading}</h2>
				<ItemButton btnType={btnType} onClick={() => setOpen(!open)} aria-controls="collapse" aria-expanded={open}>
					<i className="bi bi-plus fs-6"></i>
					Add {itemType}
				</ItemButton>
			</div>

			{/* COLLAPSEABLE ELEMENT */}

			<Collapse in={open}>
				<div className="card card-body bg-light">
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<input
								value={itemName}
								onChange={(e) => setItemName(e.target.value)}
								type="text"
								className="form-control"
								placeholder={`Enter ${itemType}...`}></input>
						</div>
						<div className="mb-3">
							<input
								value={calories}
								onChange={(e) => setCalories(+e.target.value)}
								type="text"
								className="form-control"
								placeholder="Enter Calories..."></input>
						</div>
						<Button type="submit">Add</Button>
					</form>
				</div>
			</Collapse>

			<ItemsList items={items} onRemoveMeal={onRemoveMeal}/>
		</div>
	);
}

function Item({ itemName, calories, onRemoveMeal, item }) {
	return (
		<div>
			<div className="card my-2">
				<div className="card-body">
					<div className="d-flex align-items-center justify-content-between">
						<h3 className="mx-1">{itemName}</h3>
						<div className="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5">{calories}</div>
						<Button className="delete btn btn-danger btn-sm mx-2" onClick={() => onRemoveMeal(item.id)}>
							<i className="bi bi-x"></i>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

function ItemsList({ items, onRemoveMeal }) {
	return (
		<>
			{items.map((item) => (
				<Item itemName={item.itemName} calories={item.calories} key={item.id} onRemoveMeal={onRemoveMeal} item={item} />
			))}
		</>
	);
}

// NOTES:

// Now need to figure out how to add the items reactively only to then focus on state management

// When a new meal or workout item is added, a new Item component will be added to a piece of state holding the items?

// I would probably need 2 pieces of state, meal and workout each

// I also need to figure out how to differentiate which items are a workout or meal
