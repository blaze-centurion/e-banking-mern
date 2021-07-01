import React from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const SmallCardBx = (props) => {
	return (
		<>
			<div className="smallCardBox">
				<div className="card">
					<div className="contentBx">
						<div className="cardName">Available Funds</div>
						<div className="numbers">
							{props.netWorth} <span>Rs</span>
						</div>
					</div>
					<div className="iconBx">
						<TrendingUpIcon />
					</div>
				</div>
				<div className="card">
					<div className="contentBx">
						<div className="cardName">Savings</div>
						<div className="numbers">
							100 <span>%</span>
						</div>
					</div>
					<div className="iconBx">
						<TrendingUpIcon />
					</div>
				</div>
				<div className="card">
					<div className="contentBx">
						<p>
							Did you know that transfers in our bank arrive
							immediately?
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SmallCardBx;
