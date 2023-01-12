import "./Creator.css";
import { useState, useEffect } from "react";
import ImageOptions from "../../Components/ImageOptions/ImageOptions";

const Creator = () => {
	const [textSubmited, setTextSubmitted] = useState(true);
	const [currentImage, setCurrentImage] = useState(null);
	const [memeText, setMemeText] = useState("User Text");
	const [creator, setCreator] = useState("Annonymous");

	const submitText = (e) => {
		e.preventDefault();
		if (memeText.length > 0) {
			setTextSubmitted(true);
		}
	};

	const handleMemeText = (e) => {
		console.log(e.target.value);
		setMemeText(e.target.value);
	};
	const handleCreatorText = (e) => {
		setCreator(e.target.value);
	};

	const postMeme = async (memeData) => {
		try {
			await fetch(`URL GOES HERE`, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(memeData),
			});
		} catch (error) {
			console.log(error);
		}
	};

	const submitMeme = (e) => {
		e.preventDefault();
		if (memeText.length > 0) {
			let newMeme = {
				text: memeText,
				creator: creator,
			};
			console.log(newMeme);
		}
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
			<ImageOptions
				currentImage={currentImage}
				setCurrentImage={setCurrentImage}
			/>
			<div
				className="meme-result"
				style={{ backgroundImage: `url(${currentImage})` }}
			>
				<input
					type="text"
					placeholder="Enter Meme Text Here"
					value={memeText}
					className="memeText"
					onChange={handleMemeText}
				/>
			</div>
			<form className="meme-form" onSubmit={submitMeme}>
				<label>Created by</label>
				<input
					type="text"
					value={creator}
					className="creatorName"
					onChange={handleCreatorText}
				/>
				<input type="submit" onClick={submitMeme}></input>
			</form>
		</>
	);

	return (
		<div className="creator-container">
			{textSubmited ? memeScreen : inputScreen}
		</div>
	);
};
export default Creator;
