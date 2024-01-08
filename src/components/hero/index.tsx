import hero from "../../assets/hero.svg";
import { motion } from "framer-motion";
function Hero() {
	return (
		<section className="dark:bg-[#1b1b1c] h-screen sm:min-h-[600px] overflow-x-hidden sm:h-screen md:max-h-[800px] lg:max-h-[900px] xl:max-h-[900px] overflow-scroll relative flex flex-col justify-center flex-wrap items-center px-10 md:px-16 lg:px-28   ">
			<div className="min-h-[40%]  sm:max-w-[50%] min-w-[300px] sm:h-full relative justify-center flex flex-col ">
				<h1 className="text text-xl font-poppins ">
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
						className="font-comfortaa text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-yellow-200 to-blue-[#61A3BA] via-orange-500">
						awyn
					</motion.span>
				</h1>
				<h1 className="text-5xl text">{/* Front-end */}WEb Developer</h1>
				<p className="text leading-loose mt-2 max-w-[80%]">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea at error
					eos, blanditiis unde corporis modi sit beatae incidunt odio laboriosam
					quo totam maxime eius distinctio, nostrum non minima earum.
				</p>
			</div>
			<div className="min-h-[40%]  flex items-center relative w-full  justify-center  min-w-[300px] max-w-[50%] max-h-fit sm:w-[50%]  ">
				<img
					src={hero}
					className="object-contain  sm:m-auto  sm:min-h-[600px] static overflow-hidden  -scale-x-[1]"
				/>
			</div>
		</section>
	);
}

export default Hero;
