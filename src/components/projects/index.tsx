import { projects } from "../../utils/constant";
import Card from "../card";
import { motion } from "framer-motion";

function index() {
	const whileOnScreen = {
		// offScreen: {
		// 	transition: {
		// 		type: "tween",
		// 		duration: 0.8,
		// 		staggerChildren: 0.5,
		// 		staggerDirection: -1,
		// 		delayChildren: 1,
		// 	},
		// },
		// onScreen: {
		// 	transition: {
		// 		duration: 0.8,
		// 		staggerChildren: 0.5,
		// 		delayChildren: 0.4,
		// 	},
		// },
	};

	return (
		<section
			id="projects"
			className="dark:bg-[#1b1b1c]  relative  px-10 md:px-16 lg:px-28 md:pt-16   ">
			<motion.h1 className="">Projects</motion.h1>
			<motion.div
				variants={whileOnScreen}
				animate="onScreen"
				initial="offScreen"
				className="gap-4 flex gap-y-8 mt-4 flex-wrap">
				{projects.map((project, projIndex) => (
					<Card
						key={projIndex}
						// github=""
						{...project}
					/>
				))}
			</motion.div>
		</section>
	);
}

export default index;
