import React from "react";
import { NavLink } from "react-router-dom";

const LargeCardBx = ({ id }) => {
	return (
		<>
			<div className="largeCardBox">
				<div className="card">
					<div className="cardHeader">
						<span>History</span>
						<NavLink to="history">
							<span className="title">Show more</span>
						</NavLink>
					</div>
					<div className="cardContent">
						<ul>
							<li>
								<div className="rightContent">
									<span className="title">
										from <span>Adrian Pietrzak</span>
									</span>
									<br />
									<span className="msg">
										Thank you for registering! :)
									</span>
								</div>
								<div className="leftContent">
									<span className="date">19.04.2021</span>
									<span className="currency">100 Rs</span>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className="card">
					<div className="cardHeader">
						<span>Recent Transactions</span>
					</div>
					<div className="cardContent">
						<ul>
							<li>
								<div className="rightContent">
									<span className="title">
										from <span>Adrian Pietrzak</span>
									</span>
									<br />
									<span className="msg">
										Thank you for registering! :)
									</span>
								</div>
								<div className="leftContent">
									<span className="date">19.04.2021</span>
									<div className="currency">100 Rs</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default LargeCardBx;
