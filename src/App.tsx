import { Suspense, lazy, useState } from "react";
const Navbar = lazy(() => import("./components/navbar/index"));
import { BsChevronLeft } from "react-icons/bs";
import { IconBase } from "react-icons";
import Hero from "./components/hero";

function App() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	// useEffect(() => {
	// 	window.addEventListener("resize", () => {
	// 		console.log(window.screen.width);
	// 	});
	// }, []);

	return (
		<div className="relative h-screen w-screen">
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

			<main className="">
				<Hero />
				<h1>asd</h1>
			</main>
		</div>
	);
}

export default App;
