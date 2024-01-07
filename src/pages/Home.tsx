import Hero from "../components/hero";
import Projects from "../components/projects";

function Home() {
	return (
		<>
			<Hero />
			<Projects />
			<div className="h-screen"></div>
		</>
	);
}

export default Home;
