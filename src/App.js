import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import Library from "./Pages/Library/Library";
import Creator from "./Pages/Creator/Creator";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="page-title">
					<h1>Meme Generator</h1>
				</div>
				<nav>
					<NavLink className="navlinks" to="/">
						{" "}
						Meme Creator
					</NavLink>
					<NavLink className="navlinks" to="/meme-library">
						Meme Library
					</NavLink>
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
