import { useEffect } from "react";
import Hero from "../components/hero";
import Projects from "../components/projects";

function Home() {
	useEffect(() => {
		(async () => {
			const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
			const json = await data.json();
			console.log(json, "HELLO WORLD");
		})();
	}, []);
	return (
		<>
			<Hero />
			<Projects />
			<div className="h-screen"></div>
		</>
	);
}

export default Home;
