import { useEffect, useState } from "react";
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
	const [filteredMeals, setFilteredMeals] = useState([]);
	const [filteredWorkouts, setFilteredWorkouts] = useState([]);

	// Derived state
	let caloriesConsumed = meals.map((meal) => meal.calories).reduce((acc, cur) => acc + cur, 0);
	let caloriesBurned = workouts.map((workout) => workout.calories).reduce((acc, cur) => acc + cur, 0);
	let caloriesRemaining = dailyLimit - caloriesConsumed + caloriesBurned;
	let gainLoss = caloriesConsumed - caloriesBurned;
	let progress = (gainLoss / dailyLimit) * 100;

	// useEffect

	// To sync main meals/workouts state with filtered states
	useEffect(() => {
		setFilteredMeals(meals);
		setFilteredWorkouts(workouts);
	}, [meals, workouts]);

	// Handler functions

	function handleFilter(e, filterType) {
		const searchTerm = e.target.value.toLowerCase();

		if (!searchTerm) {
			// If the input is cleared, set back to original current state
			setFilteredMeals(meals);
			setFilteredWorkouts(workouts);
			return;
		}

		if (filterType.toLowerCase() === "meals") {
			const filtered = [...meals].filter((meal) => meal.itemName.toLowerCase().includes(searchTerm));
			setFilteredMeals(filtered);
		} else {
			const filtered = [...workouts].filter((workout) => workout.itemName.toLowerCase().includes(searchTerm));
			setFilteredWorkouts(filtered);
		}
	}

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
			<ProgBarComp progress={progress} />
			<FilterContainer onFilter={handleFilter} />
			<ItemsContainer
				meals={filteredMeals}
				workouts={filteredWorkouts}
				handleAddMeals={handleAddMeals}
				handleAddWorkouts={handleAddWorkouts}
				onRemoveMeal={handleRemoveMeal}
				onRemoveWorkout={handleRemoveWorkout}
			/>
		</div>
	);
}
