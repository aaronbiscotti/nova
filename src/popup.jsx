import React from "react";
import { render } from "react-dom";
import './popup.css';

function Popup() {
    return (
		<main>	
			<div className="title">
				Clothes - Scraping Measurements...
			</div >
		</main>
    )
}

render(<Popup />, document.getElementById("popup-root"));