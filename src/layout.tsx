import { AppContext, Context } from "./context/context";
import { useContext, Suspense, lazy } from "react";
const Navbar = lazy(() => import("./components/navbar/index"));
import { BsChevronLeft } from "react-icons/bs";
import { IconBase } from "react-icons";
import { Outlet } from "react-router-dom";

const Layout = () => {
	const { isNavOpen, toggleNav } = useContext(AppContext) as Context;
	return (
		<div
			className={`relative h-screen w-screen ${
				isNavOpen && "overflow-y-hidden"
			}`}>
			<header className="relative">
				<Suspense>
					<Navbar />
				</Suspense>
			</header>
			<button
				onClick={toggleNav}
				className={`bg-white md:hidden z-[100] top-10 right-0 block fixed  shadow-lg m-0 text-2xl p-2 font-extrabold `}>
				<div
					className={`${
						isNavOpen ? "-scale-x-[1]" : "scale-x-[1] delay-700"
					} transition-transform duration-500 `}>
					<IconBase strokeWidth={2}>
						<BsChevronLeft />
					</IconBase>
				</div>
			</button>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
