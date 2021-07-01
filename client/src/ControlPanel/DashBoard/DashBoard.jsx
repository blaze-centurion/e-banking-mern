import React from "react";
import "./DashBoard.css";
import TopRow from "./TopRow";
import SmallCardBx from "./SmallCardBx";
import LargeCardBx from "./LargeCardBx";
import MedCardBx from "./MedCardBx";

const DashBoard = (props) => {


	const userName = `${props.userData.fname} ${props.userData.lname}`
	return (
		<>
			<TopRow userName={userName} />

			<div className="dashboardContentContainer">
				<SmallCardBx netWorth={props.userData.netWorth} />

				<LargeCardBx />

				<MedCardBx />
			</div>
		</>
	);
};

export default DashBoard;
