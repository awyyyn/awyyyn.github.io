import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route
						path="/project/:projectId"
						element={<Project />}
						errorElement={<h1 className="mt-5">Error: </h1>}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
