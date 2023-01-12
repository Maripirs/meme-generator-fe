import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import Library from "./Pages/Library";
import Creator from "./Pages/Creator";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="page-title">Meme Generator</div>
				<nav>
					<NavLink to="/"> Meme Creator</NavLink>
					<NavLink to="/meme-library">Meme Library</NavLink>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Creator />} />
					<Route path="/meme-library/" element={<Library />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
