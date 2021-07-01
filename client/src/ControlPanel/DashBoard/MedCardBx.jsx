import React from "react";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { NavLink } from "react-router-dom";

const MedCardBx = (props) => {
	return (
		<>
			<div className="medCardBox">
				<div className="card">
					<div className="cardHeader">
						<span>Operations</span>
						<NavLink to="/operations">
							<span className="icon">
								<AddCircleOutlineOutlinedIcon />
							</span>
							<span className="title">New Operation</span>
						</NavLink>
					</div>
					<div className="cardContent">
						<ul>
							<li className="detailsHeader">
								<div className="rightDetails">
									<span className="received">+ 1500 Rs</span>
									<br />
									<span className="label">
										Total Received
									</span>
								</div>
								<div className="leftDetails">
									<span className="withdraw">- 150 Rs</span>
									<br />
									<span className="label">
										Total Withdraw
									</span>
								</div>
							</li>
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

				<div className="card deposit">
					<div className="cardHeader">
						<span>Deposits</span>
						<NavLink to="/" onClick={(e) => e.preventDefault()} style={{cursor: "pointer"}}>
							<span className="icon">
								<AccountBalanceOutlinedIcon />
							</span>
							<span className="title">New Deposits</span>
						</NavLink>
					</div>
					<div className="cardContent">
						The deposits function is disabled.
					</div>
				</div>
			</div>
		</>
	);
};

export default MedCardBx;