import React, { useState } from "react";
import "./MazeSolver.css";
import CustomCursor from "../Components/CustomCursor/CustomCursor";

import axios from "axios";

function MazeSolver() {
	const BackEndUploadURL = "https://restapi-heroku-efe9457505f4.herokuapp.com/MazeSolver";
	const BackEndImageURL = "https://restapi-heroku-efe9457505f4.herokuapp.com/MazeSolverStaticImage";
	const staticImages = [
		{ name: "maze1", path: "Images/maze1.png" },
		{ name: "maze2", path: "Images/maze2.png" },
		{ name: "maze3", path: "Images/maze3.png" },
	];
	const showStaticImage = [];

	const [showUploadedImage, SetShowUploadedImage] = useState(null);
	const [isStaticImage, SetIsStaticImage] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [showMazeSolution, setshowMazeSolution] = useState(null);

	const handleImageChange = (event) => {
		SetShowUploadedImage(URL.createObjectURL(event.target.files[0]));
		setSelectedImage({ mazeImage: event.target.files[0] });
	};

	const selectExampleImage = (image) => {
		SetShowUploadedImage(image.path);
		setSelectedImage(image.name);
		SetIsStaticImage(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!selectedImage) {
			alert("Please upload an image of the maze to solve.");
			return;
		}

		if (isStaticImage) {
			let urlData = {
				method: "post",
				"Content-Type": "application/json",
				url: BackEndImageURL,
				data: { staticImageNo: selectedImage },
			};
			console.log("isStaticImage");
			console.log(urlData);
			await axios(urlData).then(
				(res) => {
					if (res.data) {
						SetShowUploadedImage(null);
						setshowMazeSolution(`data:image/jpeg;base64,${res.data.solution}`);
            console.log(res.data)
					}
				},
				(error) => console.log(error)
			);
		} else {
      console.log(selectedImage)
			const formData = new FormData();
			Object.keys(selectedImage).forEach((inputName) => {
        console.log(inputName, selectedImage[inputName])
				if (selectedImage[inputName]) {
					formData.append(inputName, selectedImage[inputName]);
				}
			});
			let urlData = {
				method: "post",
				"Content-Type": "multipart/form-data",
				url: BackEndUploadURL,
				data: formData,
			};
      console.log("is not StaticImage");
			console.log(urlData);
			await axios(urlData).then(
				(res) => {
					if (res.data) {
						SetShowUploadedImage(null);
            setshowMazeSolution(`data:image/jpeg;base64,${res.data.solution}`);

					}
				},
				(error) => console.log(error)
			);
		}
	};

	staticImages.forEach((img, key) =>
		showStaticImage.push(
			<button key={key} onClick={() => selectExampleImage(img) } className="btn">
				Maze {key + 1}
			</button>
		)
	);

	return (
		<>
			<CustomCursor />
			<div className="MazeSolver">
				<div className="header-container">
					<h1 className="header">MAZE SOLVER</h1>
				</div>
				<div></div>
				<label htmlFor="file-upload" className="custom-file-upload btn">
					Choose a File
					<input
						id="file-upload"
						type="file"
						onChange={handleImageChange}
						style={{ display: "none" }}
					/>
				</label>

				<div className="example-images">{showStaticImage}</div>
				<button onClick={handleSubmit} className="btn">
					Submit
				</button>
				<button onClick={() => window.history.back()} className="back-button">
					Back
				</button>
				{showUploadedImage && (
					<div className="preview">
						<div className="header-container">
							<img src={showUploadedImage} alt="Selected Maze" />
							<h2 className="header">Selected Maze:</h2>
						</div>
					</div>
				)}

				{showMazeSolution && (
					<div className="preview">
						<div className="header-container">
							<img src={showMazeSolution} alt="Selected Maze" />
							<h2 className="header">Maze Solution:</h2>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default MazeSolver;
