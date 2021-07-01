import React from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import menPic from "../images/men.jpg";
import { Avatar, IconButton } from "@material-ui/core";

const Topbar = () => {
	const toggleNavigation = (event) => {
		event.stopPropagation()
		const navigation = document.querySelector(".navigation");
		const main = document.querySelector(".main");
		navigation.classList.toggle("active");
		main.classList.toggle("active");
	};

	window.addEventListener('click', (event) => {
		if (event.target.id !== 'navigation') {
			try{
				const navigation = document.querySelector(".navigation");
				const main = document.querySelector(".main");
				navigation.classList.remove("active");
				main.classList.remove("active");
			}catch (err) {
				console.log(err);
			}
		}
	})

	return (
		<>
			<div className="topBar">
				<div className="topBarRightHeader">
					<div className="toggle" id="toggle" onClick={toggleNavigation}>
						<IconButton>
							<MenuRoundedIcon />
						</IconButton>
					</div>
					<div className="title">Dashboard</div>
				</div>
				<div className="user">
					<Avatar src={menPic} />
				</div>
			</div>
		</>
	);
};

export default Topbar;
