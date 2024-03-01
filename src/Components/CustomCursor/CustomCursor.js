import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
	const cursorRef = useRef(null);

	useEffect(() => {
		const moveCursor = (e) => {
			cursorRef.current.style.left = `${e.clientX}px`;
			cursorRef.current.style.top = `${e.clientY}px`;
		};

		document.addEventListener("mousemove", moveCursor);

		return () => {
			document.removeEventListener("mousemove", moveCursor);
		};
	}, []);

	return (
		<div ref={cursorRef} className="cursor-container">
			<div className="cursor">
				<div
					className="ripple"
					style={{
						width: "0.01in",
						height: "0.01in",
						boxShadow: "0 0 1500px 200px #184868",
						opacity: "0.1",
					}}></div>
				<div className="ripple" style={{ width: "2in", height: "2in" }}></div>
				<div className="ripple" style={{ width: "6in", height: "6in" }}></div>
			</div>
		</div>
	);
};

export default CustomCursor;
