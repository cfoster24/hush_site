import React from "react";
import "./buttons.css";
import logo from "../discord-mark-white.png";

function BotButton(props) {
	return (
		<a href= {props.link}>
			<button className='botButton'>
				<img src = {logo} height={18} width={25} />
				 Add to Discord 
			</button>
		</a>
	);
}

export default BotButton;
