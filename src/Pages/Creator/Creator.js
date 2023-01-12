import "./Creator.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageOptions from "../../Components/ImageOptions/ImageOptions";

const Creator = () => {
	const [textSubmited, setTextSubmitted] = useState(false);
	const [currentImage, setCurrentImage] = useState(null);
	const [currentImageId, setCurrentImageId] = useState(null);
	const [memeText, setMemeText] = useState("");
	const [creator, setCreator] = useState("");
	const navigate = useNavigate();

	const getImage = async () => {
		const response = await fetch(
			`https://meme-backend-hackathon.herokuapp.com/meme/${currentImageId}`
		);
		const image = await response.json();
		setCurrentImage(image);
	};

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
			await fetch(`https://meme-backend-hackathon.herokuapp.com/usermeme`, {
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
				userText: memeText,
				userName: creator.length > 0 ? creator : "Annonymous",
				image: currentImage,
			};
			postMeme(newMeme);
			navigate(`/meme-library`);
		}
	};

	useEffect(() => {
		if (currentImageId) {
			getImage();
		}
	}, [currentImageId]);

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
				currentImageId={currentImageId}
				setCurrentImageId={setCurrentImageId}
			/>
			<div className="meme-result">
				<div className="meme-image-container">
					<img
						className="meme-image-create"
						src={currentImage ? currentImage.img : ""}
					/>
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
