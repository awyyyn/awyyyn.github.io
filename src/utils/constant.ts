import { m } from "framer-motion";
import bnb from "../assets/bnb.png";
import ecommerce from "../assets/ecommerce.png";
import lending from "../assets/lending.png";
import quizapp from "../assets/quizapp.png";

export const projects = [
	{
		img: bnb,
		alt: "Ligao Laundry BnB System",
		title: "Ligao Laundry BnB Booking System",
		description: "A booking system for Ligao Laundry BnB",
		techs: [
			"ReactJS",
			"Next.js",
			"Supabase",
			"Formik",
			"Redux",
			"Material UI",
			"React Native",
			"",
		],
		type: "",
		hasApp: true,
		mobileAppRepo: "https://github.com/awyyyn/Ligao-Laundry-App",
		webAppRepo: "https://github.com/awyyyn/Ligao-Laundry-Administrator",
	},
	{
		img: ecommerce,
		alt: "La commerce",
		title: "La commerce",
		description: "",
		techs: ["Next.js", "TypeScript", "Redux", "Sanity.io", "Tailwind CSS"],
		hasApp: false,
		mobileAppRepo: "",
		webAppRepo: "https://github.com/awyyyn/react-projects/tree/main/ecommerce",
	},
	{
		img: lending,
		alt: "lending system",
		title: "Bicol Amigo's Lending System",
		description: "",
		techs: [
			"React.js + Vite",
			"Tailwind CSS + Daisy UI",
			"Supabase",
			"React Native",
			"Redux",
		],
		hasApp: true,
		mobileAppRepo: "https://github.com/awyyyn/payment-system-admin",
		webAppRepo: "https://github.com/awyyyn/payment-system-admin",
	},
	{
		img: quizapp,
		alt: "quizapp",
		title: "Country Quiz App",
		description: "",
		hasApp: false,
		techs: ["Svelte + Vite", "Tailwind CSS ", "REST API", "TypeScript"],
		mobileAppRepo: "",
		webAppRepo: "https://github.com/awyyyn/country-quiz.git",
	},
];
