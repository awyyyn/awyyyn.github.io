import { motion, AnimatePresence, Variants } from "framer-motion";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import Switch from "../switch";
import Logo from "../logo";

interface NavbarProps {
	isOpen: boolean;
	handleClick: () => void;
}

function Navbar({ isOpen }: NavbarProps) {
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

	const icons = [
		{
			icon: <BsGithub />,
			link: "https://github.com/awyyyn",
		},
		{
			icon: <BsLinkedin />,
			link: "https://www.linkedin.com/in/alwin-puche-7295851b7",
		},
		{
			icon: <BsInstagram />,
			link: "https://github.com/awyyyn",
		},
	];

	return (
		<>
			<nav className="hidden md:flex relative  justify-between items-center shadow-lg px-28 py-3 dark:bg-[#232324]">
				<div className="object-contain h-full w-20">
					<Logo />
				</div>
				<div className="flex gap-x-6">
					<a href="#" className="link">
						About me
					</a>
					<a href="#" className="link">
						Projects
					</a>
					<a href="#" className="link">
						Contact me
					</a>
				</div>
				<div className="flex gap-x-4 items-center">
					<Switch />
					{icons.map(({ link, icon }, indx) => (
						<a href={link} key={indx} target="_blank" className="icons">
							{icon}
						</a>
					))}
				</div>
			</nav>

			<AnimatePresence>
				{isOpen && (
					<motion.nav
						variants={navVariants}
						initial="animateOut"
						animate={"animate"}
						exit={"animateOut"}
						className="md:hidden h-screen w-screen absolute left-0 top-0 z-[99]">
						<div className="relative w-full h-full  ">
							{/* <button className="z-50 absolute" onClick={handleClick}>
								Close
							</button> */}
							<div className="absolute w-full h-full bg-white dark:bg-black blur-xl -z-[10]" />
							<div className="flex items-center flex-col justify-evenly space-y-4  w-full h-full  z-[99]">
								<div className="absolute top-10 left-10 z-[100] object-contain h-full w-20">
									<Logo />
								</div>
								<motion.div
									// initial="initial"
									// animate="animate"

									className="text"
									variants={childrenVariant}>
									About me
								</motion.div>
								<motion.div
									// initial="initial"
									// animate="animate"
									className="text"
									variants={childrenVariant}>
									Projects
								</motion.div>
								<motion.div
									// onClick={() => alert("sd")}
									// initial="initial"
									// animate="animate"
									className="text"
									variants={childrenVariant}>
									Projects
								</motion.div>

								<motion.div variants={childrenVariant}>
									<Switch />
								</motion.div>
								<motion.div
									variants={iconsContainerVariants}
									className="flex gap-x-5">
									{icons.map(({ link, icon }, indx) => (
										<motion.div variants={iconsVariants} key={indx}>
											<a href={link} target="_blank" className="text-3xl icons">
												{icon}
											</a>
										</motion.div>
									))}
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
