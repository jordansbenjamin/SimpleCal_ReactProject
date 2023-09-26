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
	let caloriesRemaining = dailyLimit - (caloriesConsumed);
  let gainLoss = caloriesConsumed - caloriesBurned;

	function handleAddMeals(meal) {
		setMeals((prevMeals) => [...prevMeals, meal]);
	}

	function handleAddWorkouts(workout) {
		setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
	}

	return (
		<div>
			<NavbarHeader />
			<DisplayStats dailyLimit={dailyLimit} caloriesConsumed={caloriesConsumed} caloriesBurned={caloriesBurned} caloriesRemaining={caloriesRemaining} gainLoss={gainLoss}/>
			<ProgBarComp />
			<FilterContainer />
			<ItemsContainer
				meals={meals}
				workouts={workouts}
				handleAddMeals={handleAddMeals}
				handleAddWorkouts={handleAddWorkouts}
			/>
		</div>
	);
}
