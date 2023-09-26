import { useState } from "react";
import FilterContainer from "./components/Filter";
import ItemsContainer from "./components/Items";
import NavbarHeader from "./components/Navbar";
import ProgBarComp from "./components/ProgressBar";
import DisplayStats from "./components/Stats";

export default function App() {
	// State required to be lifted here in order to be used with other components
	const [meals, setMeals] = useState([]);
	const [workouts, setWorkouts] = useState([]);

	function handleAddMeals(meal) {
		setMeals((prevMeals) => [...prevMeals, meal]);
	}

	function handleAddWorkouts(workout) {
		setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
	}

	return (
		<div>
			<NavbarHeader />
			<DisplayStats />
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
