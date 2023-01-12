import "./Creator.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageOptions from "../../Components/ImageOptions/ImageOptions";

const Creator = () => {
	const [textSubmited, setTextSubmitted] = useState(false);
	const [currentImage, setCurrentImage] = useState(null);
	const [memeText, setMemeText] = useState("");
	const [creator, setCreator] = useState("");
	const navigate = useNavigate();

	const submitText = (e) => {
		e.preventDefault();
		if (memeText.length > 0) {
			setTextSubmitted(true);
		}
	};

	const handleMemeText = (e) => {
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
				creator: creator.length > 0 ? creator : "Annonymous",
				image: currentImage,
			};
			console.log(newMeme);
			navigate(`/meme-library`);
		}
	};

	const inputScreen = (
		<>
			<form className="welcome-form" onSubmit={submitText}>
				<input
					type="text"
					placeholder="Enter Meme Text Here"
					value={memeText}
					className="memeText"
					onChange={handleMemeText}
				/>
				<input type="submit" className="submit-button" />
			</form>
		</>
	);

	const memeScreen = (
		<>
			<ImageOptions
				currentImage={currentImage}
				setCurrentImage={setCurrentImage}
			/>
			<div className="meme-result">
				<div className="meme-image-container">
					<img className="meme-image-create" src={currentImage} />
				</div>
				<div className="meme-text-container">
					<textarea
						type="text"
						placeholder="Enter Meme Text Here"
						value={memeText}
						className="memeText"
						onChange={handleMemeText}
					/>
				</div>
			</div>
			<form className="meme-form" onSubmit={submitMeme}>
				<label className="form-label">Created by</label>
				<input
					type="text"
					placeholder="Annonymous"
					value={creator}
					className="creatorName"
					onChange={handleCreatorText}
				/>
				<input
					type="submit"
					onClick={submitMeme}
					className="submit-button"
				></input>
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
