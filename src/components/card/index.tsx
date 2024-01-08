import { Variants, motion } from "framer-motion";
// import { FaLink } from "react-icons/fa6";

const Card = ({
	alt,
	description,
	img,
	techs,
	title,
	hasApp,
	appRepo,
	id,
	webRepo,
	appUrl,
	webUrl,
}: Project) => {
	const childrenVariant: Variants = {
		animate: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				delay: 0.6,
				duration: 0.6,
				staggerChildren: 0.1,
				delayChildren: 0.6,
			},
		},
		animateOut: {
			opacity: 0,
			y: 30,
			scale: 0.8,
			transition: {
				delay: 0.6,
				staggerChildren: 0.6,
				staggerDirection: -1,
			},
		},
	};

	// translate-x-full transition-transform duration-700 group-hover:translate-x-0
	return (
		<motion.div
			variants={childrenVariant}
			viewport={{ once: true, amount: 0.5 }}
			whileInView="animate"
			exit="animateOut"
			initial="animateOut"
			className="relative dark:text-white dark:border-transparent dark:shadow-[#ffffff20] border shadow-lg md:mx-auto rounded-lg flex flex-col md:flex-row items-start   group overflow-hidden">
			<img
				className="w-full md:w-1/3 lg:w-1/2"
				alt={alt}
				src={img} // use normal <img> attributes as props
			/>
			<motion.div className="p-4 lg:w-[40%] space-y-4">
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold hover:underline">
					{title}
				</h1>
				<div className=" space-y-2">
					<h3 className="font-bold   md:text-lg lg:text-xl">Description:</h3>
					<p className="indent-5   md:text-lg lg:text-xl">
						{description.substring(10)}...
					</p>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Card;
