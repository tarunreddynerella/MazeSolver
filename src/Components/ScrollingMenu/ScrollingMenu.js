import React from "react";
function ScrollingMenu( props) {
	const {tableContents} = props;
	return (
		<div className="container">
			<ul className="section table-of-contents pinned">
				<li>
					<h5 className="">Hi, I'm</h5>
					<h3 className="header">Tarun Reddy</h3>
				</li>
				{tableContents.map((item) => (
					<li key={item}>
						<a href={"#" + item}>
							<h6>{item}</h6>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
export default ScrollingMenu;
