import { useState } from "react";
import FilterContainer from "./components/Filter";
import ItemsContainer from "./components/Items";
import NavbarHeader from "./components/Navbar";
import ProgBarComp from "./components/ProgressBar";
import DisplayStats from "./components/Stats";

export default function App() {
	// State required to be lifted here in order to be used with other components
	const [dailyLimit, setDailyLimit] = useState(2000);
	const [meals, setMeals] = useState([]);
	const [workouts, setWorkouts] = useState([]);

	// Derived state
	let caloriesConsumed = meals.map((meal) => meal.calories).reduce((acc, cur) => acc + cur, 0);
	let caloriesBurned = workouts.map((workout) => workout.calories).reduce((acc, cur) => acc + cur, 0);
	let caloriesRemaining = dailyLimit - caloriesConsumed + caloriesBurned;
	let gainLoss = caloriesConsumed - caloriesBurned;

	// Handler functions

	function handleReset() {
		setDailyLimit(2000);
		setMeals([]);
		setWorkouts([]);
	}

	function handleDailyLimit(newLimit) {
		setDailyLimit((dailyLimit) => newLimit);
	}

	function handleAddMeals(meal) {
		setMeals((prevMeals) => [...prevMeals, meal]);
	}

	function handleRemoveMeal(id) {
		const isConfirmed = window.confirm("Are you sure you want to delete this item?");

		if (isConfirmed) {
			setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== id));
		}
	}

	function handleRemoveWorkout(id) {
		const isConfirmed = window.confirm("Are you sure you want to delete this item?");

		if (isConfirmed) {
			setWorkouts((prevWorkouts) => prevWorkouts.filter((workout) => workout.id !== id));
		}
	}

	function handleAddWorkouts(workout) {
		setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
	}

	return (
		<div>
			<NavbarHeader onSetDailyLimit={handleDailyLimit} onReset={handleReset} />
			<DisplayStats
				dailyLimit={dailyLimit}
				caloriesConsumed={caloriesConsumed}
				caloriesBurned={caloriesBurned}
				caloriesRemaining={caloriesRemaining}
				gainLoss={gainLoss}
			/>
			<ProgBarComp />
			<FilterContainer />
			<ItemsContainer
				meals={meals}
				workouts={workouts}
				handleAddMeals={handleAddMeals}
				handleAddWorkouts={handleAddWorkouts}
				onRemoveMeal={handleRemoveMeal}
				onRemoveWorkout={handleRemoveWorkout}
			/>
		</div>
	);
}
