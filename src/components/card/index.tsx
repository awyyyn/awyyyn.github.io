import { Variants, motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { FaLink } from "react-icons/fa6";

interface CardProps {
	img: string;
	// github: string;
	// url: string;
	alt: string;
	techs: string[];
	description: string;
	title: string;
	hasApp: boolean;
	mobileAppRepo: string;
	webAppRepo: string;
}

const Card = ({
	alt,
	description,
	img,
	techs,
	title,
	hasApp,
	mobileAppRepo,
	webAppRepo,
}: CardProps) => {
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
			y: 80,
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
			className="relative dark:text-white dark:border-transparent dark:shadow-[#ffffff20] border shadow-lg md:mx-auto rounded-lg flex flex-col lg:flex-row items-start   group overflow-hidden">
			<LazyLoadImage
				className="w-full lg:w-[60%]"
				alt={alt}
				src={img} // use normal <img> attributes as props
			/>
			<motion.div className="p-6 lg:w-[40%] space-y-4">
				<h1 className="text-2xl font-semibold hover:underline">{title}</h1>
				<div className="flex gap-x-2">
					<h3 className="font-bold ">Description:</h3>
					<p>{description}</p>
				</div>

				<div className="flex flex-wrap gap-x-2 gap-y-1">
					<b>Technologies: </b>
					{techs.map((tech, index) => (
						<code
							key={index}
							className="border dark:text-black px-2  rounded-md border-gray-200 bg-slate-50">
							{tech}
						</code>
					))}
				</div>

				<div className="flex flex-wrap gap-x-2">
					<h3 className="font-bold pr-[1ch]">Web:</h3>
					<a href={webAppRepo} target="_blank" rel="noreferrer">
						{webAppRepo}
					</a>
				</div>
				{hasApp && (
					<div className="flex flex-wrap  ">
						<h3 className="font-bold pr-[1ch]">App:</h3>
						<a href={mobileAppRepo} target="_blank" rel="noreferrer">
							{mobileAppRepo}
						</a>
					</div>
				)}
			</motion.div>
		</motion.div>
	);
};

export default Card;
