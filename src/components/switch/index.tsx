import { Switch as SwitchUI } from "@headlessui/react";
import { useEffect, useState } from "react";

function Switch() {
	const [isDarkMode, setIsDarkMode] = useState(
		localStorage.getItem("theme") == "dark" ? true : false
	);

	useEffect(() => {
		function isDarkModeEnabled() {
			const theme = localStorage.getItem("theme");
			if (
				theme === "dark" ||
				(!("theme" in localStorage) &&
					window.matchMedia("(prefers-color-scheme: dark)").matches)
			) {
				document.documentElement.classList.add("dark");
				localStorage.setItem("theme", "dark");
			} else {
				localStorage.setItem("theme", "light");
				document.documentElement.classList.remove("dark");
			}
		}
		isDarkModeEnabled();
	}, []);

	return (
		<SwitchUI
			checked={isDarkMode}
			onChange={(val) => {
				setIsDarkMode((p) => !p);
				if (val) {
					localStorage.setItem("theme", "dark");
					document.documentElement.classList.add("dark");
				} else {
					localStorage.setItem("theme", "light");
					document.documentElement.classList.remove("dark");
				}
			}}
			className={` relative bg-stone-200 dark:bg-stone-800 inline-flex h-8 w-16  items-center rounded-full`}>
			<span className="sr-only">Enable notifications</span>
			<span
				className={`${
					isDarkMode
						? "translate-x-7 h-8  w-8 bg-[url('https://cdn-icons-png.flaticon.com/512/624/624106.png')] bg-cover "
						: "translate-x-1 h-8  w-8 bg-[url('https://cdn-icons-png.flaticon.com/512/826/826955.png')] bg-cover"
				} duration-300 inline-block h-4 w-4 transform rounded-full   transition`}
			/>
		</SwitchUI>
	);
}

export default Switch;
