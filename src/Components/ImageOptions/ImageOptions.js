import "./ImageOptions.css";
import { useState, useEffect } from "react";
const ImageOptions = (props) => {
	const [randomImages, setRandomImages] = useState([]);
	const [allImages, setAllImages] = useState(null);

	const getImages = async () => {
		const response = await fetch("https://api.imgflip.com/get_memes");
		const memes = await response.json();
		setAllImages(memes);
	};
	const randomizeImages = () => {
		let images = [];
		for (let i = 0; i < 4; i++) {
			let randomInd = Math.floor(Math.random() * allImages.data.memes.length);
			images.push(allImages.data.memes[randomInd].url);
		}
		setRandomImages(images);
	};

	const selectImage = (e) => {
		console.log("e.target", e.target.closest("div").id);
		props.setCurrentImage(e.target.closest("div").id);
	};

	useEffect(() => {
		getImages();
	}, []);

	useEffect(() => {
		if (allImages) {
			randomizeImages();
			props.setCurrentImage(randomImages[0]);
		}
	}, [allImages]);

	const selectedImages = randomImages.map((image, i) => {
		return (
			<div
				className={
					"option-container " +
					(props.currentImage
						? props.currentImage === image
							? "active"
							: ""
						: "")
				}
				key={i}
				onClick={selectImage}
				id={image}
			>
				<img className="option-image " src={image} />
			</div>
		);
	});

	return (
		<>
			<div className="image-selector-container">
				<div className="images-container">
					{randomImages.length > 0 ? selectedImages : "Loading..."}
				</div>
				<button onClick={randomizeImages}>Genetate New Images</button>
			</div>
		</>
	);
};
export default ImageOptions;
