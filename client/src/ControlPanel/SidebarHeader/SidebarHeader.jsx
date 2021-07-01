import React from "react";
import AppleIcon from "@material-ui/icons/Apple";
import DesktopWindowsOutlinedIcon from "@material-ui/icons/DesktopWindowsOutlined";
import PaymentIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import "./SidebarHeader.css";
import {NavLink} from 'react-router-dom';


const SidebarHeader = () => {
	return (
		<>
			<div className="navigation" id="navigation">
				<ul>
					<li>
						<NavLink exact to="/dashboard">
							<span className="icon">
								<AppleIcon />
							</span>
							<span className="title">Bank</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName="active" to="/dashboard">
							<span className="icon">
								<DesktopWindowsOutlinedIcon />
							</span>
							<span className="title">DashBoard</span>
						</NavLink>
					</li>
					<li style={{cursor: "no-drop"}}>
						<NavLink exact to="" onClick={(e) => e.preventDefault()} style={{pointerEvents: "none"}} className="disabled">
							<span className="icon">
								<PaymentIcon />
							</span>
							<span className="title">Payment</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName="active" to="/history">
							<span className="icon">
								<HistoryOutlinedIcon />
							</span>
							<span className="title">History</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName="active" to="/operations">
							<span className="icon">
								<CreditCardOutlinedIcon />
							</span>
							<span className="title">Operations</span>
						</NavLink>
					</li>
					<li style={{cursor: "no-drop"}}>
						<NavLink exact to="" onClick={(e) => e.preventDefault()} style={{pointerEvents: "none"}} className="disabled">
							<span className="icon">
								<AccountBalanceOutlinedIcon />
							</span>
							<span className="title">Deposits</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName="active" to="/settings">
							<span className="icon">
								<SettingsOutlinedIcon />
							</span>
							<span className="title">Settings</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default SidebarHeader;
