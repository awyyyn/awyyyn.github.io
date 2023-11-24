import { Suspense, lazy, useState } from "react";
const Navbar = lazy(() => import("./components/navbar/index"));
import { BsChevronLeft } from "react-icons/bs";
import { IconBase } from "react-icons";
import Hero from "./components/hero";
import Projects from "./components/projects";

function App() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div
			className={`relative h-screen w-screen ${
				isNavOpen && "overflow-y-hidden"
			}`}>
			<header className="relative">
				<Suspense>
					<Navbar
						handleClick={() => {
							setIsNavOpen((p) => !p);
							console.log("CLOSED");
						}}
						isOpen={isNavOpen}
					/>
				</Suspense>
				<button
					onClick={() => setIsNavOpen((p) => !p)}
					className={`bg-white md:hidden z-[100] top-10 right-0 block absolute  shadow-lg m-0 text-2xl p-2 font-extrabold `}>
					<div
						className={`${
							isNavOpen ? "-scale-x-[1]" : "scale-x-[1] delay-700"
						} transition-transform duration-500 `}>
						<IconBase strokeWidth={2}>
							<BsChevronLeft />
						</IconBase>
					</div>
				</button>
			</header>

			<main>
				<Hero />
				<Projects />
			</main>
		</div>
	);
}

export default App;
