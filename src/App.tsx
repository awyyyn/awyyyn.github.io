import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Navbar = lazy(() => import("./components/navbar/index"));
import { BsChevronLeft } from "react-icons/bs";

function App() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	// useEffect(() => {
	// 	window.addEventListener("resize", () => {
	// 		console.log(window.screen.width);
	// 	});
	// }, []);

	return (
		<div className="relative overflow-hidden h-screen w-screen">
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
					className={`bg-white md:hidden top-10 right-0 block absolute z-50 shadow-lg m-0 text-2xl p-2 font-extrabold `}>
					<div
						className={`${
							isNavOpen ? "rotate-180" : "rotate-0 delay-700"
						} transition-transform duration-500`}>
						<BsChevronLeft />
					</div>
				</button>
			</header>
		</div>
	);
}

export default App;
