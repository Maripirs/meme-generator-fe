import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import Library from "./Componens/Library";
import Creator from "./Componens/Creator";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="page-title">Meme Generator</div>
			</header>
			<nav>
				<NavLink to="/"> Meme Creator</NavLink>
				<NavLink to="/meme-library">Meme Library</NavLink>
			</nav>
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