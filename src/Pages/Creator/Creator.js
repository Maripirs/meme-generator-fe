import "./Creator.css";
import { useState, useEffect } from "react";
import ImageOptions from "../../Components/ImageOptions/ImageOptions";

const Creator = () => {
	const [currentImage, setCurrentImage] = useState(null);
	const [textSubmited, setTextSubmitted] = useState(false);
	const [memeText, setMemeText] = useState("");

	const submitText = () => {};

	const handleMemeText = (e) => {
		setMemeText(e.target.value);
	};

	const inputScreen = (
		<>
			<form onSubmit={submitText}>
				<input
					type="text"
					placeholder="Enter Meme Text Here"
					value={memeText}
					onChange={handleMemeText}
				/>
				<input type="submit" />
			</form>
		</>
	);

	const memeScreen = (
		<>
			<ImageOptions />
			<div className="meme-result">
				<div className="user-text">DEMO</div>
			</div>
		</>
	);

	return <div>{textSubmited ? memeScreen : inputScreen}</div>;
};
export default Creator;
