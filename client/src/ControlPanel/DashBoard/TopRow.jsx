import React from "react";

const TopRow = ({ userName }) => {
	const greetText = () => {
		const time = new Date().getHours();
		return 'Good '+ (time<12 ? 'Morning' : time<18 ? 'Afternoon' : 'Evening')
	};

	// const date = new Date().toLocaleString().replaceAll("/", ".").replace(/:\d{2}\s/,' ');
	
	return (
		<>
			<div className="greeting_row">
				<p className="title">
					{greetText()}: <span>{userName}</span>
				</p>
				<p className="title">
					Last successful login: <span>19.04.2021, 01:25 PM</span>
				</p>
			</div>
		</>
	);
};

export default TopRow;
