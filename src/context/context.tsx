import { createContext } from "react";
import React from "react";

export interface Context {
	isNavOpen: boolean;
	toggleNav: VoidFunction;
}

const initialState = {
	isNavOpen: false,
};

export const AppContext = createContext<Context | null>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, setStates] = React.useState(initialState);

	const toggleNav = () => {
		setStates((p) => ({ ...p, isNavOpen: !p.isNavOpen }));
	};

	return (
		<AppContext.Provider value={{ isNavOpen: state.isNavOpen, toggleNav }}>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;
