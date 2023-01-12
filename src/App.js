import "./App.css";
import { Routes, Route } from "react-router-dom";

import Library from "./Componens/Library";
import Creator from "./Componens/Creator";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="page-title">Meme Generator</div>
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
