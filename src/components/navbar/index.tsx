import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

interface NavbarProps {
	isOpen: boolean;
	handleClick: () => void;
}

function Navbar({ handleClick, isOpen }: NavbarProps) {
	const [theme, setTheme] = useState("light");

	console.log("nav", isOpen);

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (
			theme == "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const navVariants: Variants = {
		// initial: { transform: "translateX(100%)" },
		animate: {
			transform: "translateX(0%)",
			transition: {
				duration: 0.3,
				staggerChildren: 0.2,
				delayChildren: 0.4,
			},
		},
		animateOut: {
			transform: "translateX(100%)",
			transition: {
				delay: 2,
				staggerChildren: 0.15,
				staggerDirection: -1,
				delayChildren: 1,
			},
		},
	};

	const childrenVariant: Variants = {
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.3,
				staggerChildren: 0.2,
				delayChildren: 0.6,
			},
		},
		animateOut: {
			opacity: 0,
			x: 30,
			transition: {
				staggerChildren: 0.15,
				staggerDirection: -1,
			},
		},
	};

	const iconsContainerVariants: Variants = {
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.2,
				staggerDirection: 1,
			},
		},
		animateOut: {
			opacity: 0,
			y: -30,
			transition: {
				staggerChildren: 0.15,
				staggerDirection: -1,
			},
		},
	};

	const iconsVariants: Variants = {
		animateOut: {
			opacity: 0,
			y: 30,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0,
			},
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.1,
				staggerDirection: 1,
			},
		},
	};

	return (
		<>
			<motion.nav
				initial={{ x: "100%" }}
				animate={{ x: "0%", transition: { duration: 1 } }}
				className="left-full md:left-0  absolute top-0 md:relative flex flex-col md:flex-row w-screen md:w-full h-screen md:max-h-14 justify-between items-center px-10"></motion.nav>

			<AnimatePresence>
				{isOpen && (
					<motion.nav
						variants={navVariants}
						initial="animateOut"
						animate={"animate"}
						exit={"animateOut"}
						className="md:hidden h-screen w-screen absolute left-0 top-0">
						<div className="relative w-full h-full  ">
							{/* <button className="z-50 absolute" onClick={handleClick}>
								Close
							</button> */}
							<div className="absolute w-full h-full bg-white bg-opacity-20 blur-md z-10" />
							<div className="flex items-center flex-col justify-evenly z-20 space-y-4  w-full h-full  z-[99]">
								<motion.div
									// initial="initial"
									// animate="animate"
									variants={childrenVariant}>
									About me
								</motion.div>
								<motion.div
									// initial="initial"
									// animate="animate"
									variants={childrenVariant}>
									Projects
								</motion.div>
								<motion.div
									// initial="initial"
									// animate="animate"
									variants={childrenVariant}>
									Projects
								</motion.div>
								<motion.div
									variants={iconsContainerVariants}
									className="flex gap-x-5">
									<motion.div variants={iconsVariants}>
										<a href="#" className="text-3xl">
											<BsGithub />
										</a>
									</motion.div>
									<motion.div variants={iconsVariants}>
										<a href="#" className="text-3xl">
											<BsLinkedin />
										</a>
									</motion.div>
									<motion.div variants={iconsVariants}>
										<a href="#" className="text-3xl">
											<BsInstagram />
										</a>
									</motion.div>
								</motion.div>
							</div>
							flex items-center flex-col justify-evenly z-20 space-y-4
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</>
	);
}

export default Navbar;
