import React from "react";
import "./buttons.css";

function GithubButton(props) {
	return (
		<a href={props.link}>
			<button className='githubButton'>View Documentation</button>
		</a>
	);
}

export default GithubButton;
