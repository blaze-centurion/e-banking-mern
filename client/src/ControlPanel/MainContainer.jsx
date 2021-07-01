import React, { createContext, useEffect, useState } from "react";
import Topbar from "./Topbar";
import DashBoard from "./DashBoard/DashBoard";
import "./MediaQuery.css";
import History from "./History/History";
import Operations from "./Operations/Operations";
import Settings from "./Settings/Settings";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import Pusher from 'pusher-js';

const UserDataProvider = createContext();

const MainContainer = (props) => {
	const [userData, setUserData] = useState({
		fname: "",
		lname: "",
		email: "",
		netWorth: "",
		accountNumber: "",
		operations: "",
		history: "",
	});

	const getUserData = async () => {
		const res = await fetch("/users/api/v1/getData", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		const data = await res.json();
		setUserData({
			fname: data.msg.fname,
			lname: data.msg.lname,
			email: data.msg.email,
			netWorth: data.msg.netWorth,
			accountNumber: data.msg.accountNumber,
			operations: data.msg.operations,
			history: data.msg.history,
		});
	};

	useEffect(() => {
		getUserData();
	}, []);

	useEffect(() => {
		const pusher = new Pusher("0d2fcefb63715799924c", {
			cluster: "ap2",
		});

		const channel = pusher.subscribe("operations");
		channel.bind("creditMoney", (data) => {
			// console.log(JSON.stringify(data));
			console.log("first: ", data);
		});
	}, [userData]);

	const RenderContent = () => {
		switch (props.component) {
			case "dashboard":
				return <DashBoard userData={userData} />;
			case "history":
				return <History history={userData.history} />;

			case "operations":
				return (
					<UserDataProvider.Provider value={userData}>
						<Operations />
					</UserDataProvider.Provider>
				);

			case "setting":
				return <Settings />;

			default:
				return <DashBoard userData={userData} />;
		}
	};

	return (
		<>
			<div
				className="container"
				style={{ position: "relative", width: "100%" }}
			>
				<SidebarHeader />
				<div className="main">
					<Topbar />
					{RenderContent()}
				</div>
			</div>
		</>
	);
};

export { UserDataProvider };
export default MainContainer;
