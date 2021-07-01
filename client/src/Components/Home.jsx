import React, { useEffect } from "react";
import Header from "./Header/Header";
import "./MediaQuery.css";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./Login-Signup/Login";
import Signup from "./Login-Signup/Signup";
import { useHistory } from "react-router";

const Home = (props) => {
	const RenderComp = () => {
		switch (props.component) {
			case "Landing":
				return <LandingPage />;

			case "login":
				return <Login />;

			case "signup":
				return <Signup />;

			default:
				return <LandingPage />;
		}
	};

	const history = useHistory();

	const isUserLogin = async () => {
		try {
			const res = await fetch("/users/api/v1/isLogin", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				credentials: "include",
			});

			const data = await res.json();
			if (!data) {
				console.log("User not login");
			} else {
				history.push(`/dashboard`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		isUserLogin();
	}, []);

	return (
		<>
			<section
				className="Maincontainer"
				style={{
					position: "relative",
					width: "100%",
					minHeight: "100vh",
				}}
			>
				<Header />
				{RenderComp()}
			</section>
		</>
	);
};

export default Home;
