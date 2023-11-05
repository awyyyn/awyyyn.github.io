import hero from "../../assets/hero.svg";
import { motion } from "framer-motion";
function Hero() {
	return (
		<section className="h-screen sm:min-h-[600px] sm:h-screen md:max-h-[800px] lg:max-h-[900px] xl:max-h-[900px] overflow-hidden relative flex flex-col flex-wrap sm:flex-row px-10 md:px-28 ld:px-32 ">
			<div className="min-h-[50%] sm:max-w-[50%] sm:h-full   justify-center flex flex-col">
				<h1 className="text text-2xl font-poppins ">
					Hello, <span className="">I&apos;m</span>{" "}
					<motion.span
						initial={{
							backgroundImage:
								"linear-gradient(115deg,hsl(240deg 100% 20%) 0%,hsl(286deg 100% 21%) 20%,hsl(312deg 100% 25%) 29%,hsl(325deg 100% 33%) 36%,hsl(334deg 100% 40%) 43%,hsl(349deg 80% 53%) 50%,hsl(7deg 96% 61%) 57%,hsl(22deg 100% 59%) 64%,hsl(35deg 100% 56%) 71%,hsl(46deg 100% 55%) 80%,hsl(55deg 100% 60%) 100%)",
						}}
						animate={{
							backgroundImage:
								"linear-gradient(315deg,hsl(240deg 100% 20%) 0%,hsl(286deg 100% 21%) 20%,hsl(312deg 100% 25%) 29%,hsl(325deg 100% 33%) 36%,hsl(334deg 100% 40%) 43%,hsl(349deg 80% 53%) 50%,hsl(7deg 96% 61%) 57%,hsl(22deg 100% 59%) 64%,hsl(35deg 100% 56%) 71%,hsl(46deg 100% 55%) 80%,hsl(55deg 100% 60%) 100%)",
						}}
						transition={{
							duration: 3,
							repeatType: "mirror",
							ease: "linear",
							repeat: Infinity,
							repeatDelay: 0.3,
						}}
						className="font-comfortaa text-5xl text-transparent bg-clip-text bg-gradient-to-tr from-yellow-200 to-blue-[#61A3BA] via-orange-500">
						awyn
					</motion.span>
				</h1>
				<h1 className="text-5xl text">Fullstack Developer</h1>
				<p className="text leading-loose mt-2">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea at error
					eos, blanditiis unde corporis modi sit beatae incidunt odio laboriosam
					quo totam maxime eius distinctio, nostrum non minima earum.
				</p>
			</div>
			<div className="min-h-[50%] flex items-center justify-center sm:h-full  sm:w-[50%]  ">
				<img
					src={hero}
					className="object-contain  sm:m-auto  sm:min-h-[600px]   min-w-full -scale-x-[1]"
				/>
			</div>
		</section>
	);
}

export default Hero;
