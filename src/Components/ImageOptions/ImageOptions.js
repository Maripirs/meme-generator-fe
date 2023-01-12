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
		if (!props.currentImage) {
			props.setCurrentImage(images[0]);
		}
		setRandomImages(images);
	};

	const selectImage = (e) => {
		props.setCurrentImage(e.target.closest("div").id);
	};

	useEffect(() => {
		getImages();
	}, []);

	useEffect(() => {
		if (allImages) {
			randomizeImages();
		}
	}, [allImages]);

	const selectedImages = randomImages.map((image, i) => {
		return (
			<div
				className={
					"option-container " +
					(props.currentImage
						? props.currentImage === image
							? "activeImg"
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
				<h3>Select an image for your meme</h3>
				<div className="images-container">
					{randomImages.length > 0 ? selectedImages : "Loading..."}
				</div>
				<button className="submit-button" onClick={randomizeImages}>
					Genetate New Images
				</button>
			</div>
		</>
	);
};
export default ImageOptions;
