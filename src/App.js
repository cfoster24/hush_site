import React from "react";
import "./App.css";
import hush from "./hush.png";

import BotButton from "./components/DiscordButton";
import GithubButton from "./components/GithubButton";

function App() {
	const botLink =
		"https://discordapp.com/oauth2/authorize?&client_id=1086502080295997440&scope=bot";
	const githubLink = "https://github.com/cfoster24/hush_bot";

	return (
		<div className="wrapper">
			<h1>Message Anonymously with Hush!</h1>
			<div className='profile'>
				<img className="hush-logo" src={hush} />
				<span className = "text-wrapper">
					<div className='username'> Hush Hush </div>
					<div className='discriminator'> #6953 </div>
				</span>

				<BotButton link={botLink} />
			</div>

      <div className="commands"> 
        <h2 className="command-header">Start a command with !h</h2>
		<div className="row">{"message <username> <4-digit code> <message content>:  Messages a user of your choice- must share a server with the bot"}</div>
		<div className="row">{"respond <emoji> <message content>:  Respond to a user that sent you a message"}</div>
		<div className="row">{"delete <emoji>(optional):  Delete the most recent message the bot has sent you, or delete the most recent message you sent someone through the bot"}</div>
		<div className="row">{"delete_all <emoji>(optional):  Delete all messages from the bot, or delete all messages you sent someone through the bot"}</div>
      </div>
    
			<span className='flavor-text'>
				Two Discord servers worldwide trust Hush to anonymously message
				each other!
			</span>
      
			<span className='buttonContainer'>
				<GithubButton link={githubLink} />
			</span>
		</div>
	);
}

export default App;
