import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import MainContainer from "./ControlPanel/MainContainer";

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/login">
					<Home component="login" />
				</Route>
				<Route exact path="/signup">
					<Home component="signup" />
				</Route>
				<Route exact path="/dashboard">
					<MainContainer component="dashboard" />
				</Route>
				<Route exact path="/history">
					<MainContainer component="history" />
				</Route>
				<Route exact path="/operations">
					<MainContainer component="operations" />
				</Route>
				<Route exact path="/settings">
					<MainContainer component="setting" />
				</Route>
			</Switch>
		</>
	);
};

export default App;
