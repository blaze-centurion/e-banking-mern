import React, { useState } from "react";
import loginPic from "../../images/login.svg";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { NavLink, useHistory } from "react-router-dom";

const Login = () => {
    
    const [loginDetails, setLoginDetails] = useState({
        password: "",
        email: "",
        pinCode: ""
    })

	const history = useHistory();

    const handleInput = (event) => {
        const {name, value} = event.target;
        setLoginDetails({...loginDetails, [name]: value});
    }

	const loginUser = async (event) => {
		event.preventDefault();
		const { email, password, pinCode } = loginDetails;
		const res = await fetch('/users/api/v1/login', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify( { email, password, pinCode } )
		});

		const data = await res.json();
		
		if ( res.status === 422 || !data ) {
			window.alert("Invalid Login")
			console.log("Invalid Login")
		} else {
			window.alert("Login Successful");
			console.log("Login Successful");
			history.push('/dashboard');
		}
	}

	return (
		<>
			<section id="signup_section" className="login_section">
				<div className="container">
					<div className="signupBx">
						<div className="imgBx">
							<img src={loginPic} alt="Signup" />
						</div>
						<div className="formBx">
							<form autoComplete="off" method="POST">
								<h2>Sign In</h2>
								<div className="form_div">
									<label htmlFor="email">
										<MailIcon />
									</label>
									<input
										type="email"
										placeholder="Your Email"
										id="email"
										name="email"
										value={loginDetails.email}
										onChange={handleInput}
									/>
								</div>
								<div className="form_div">
									<label htmlFor="password">
										<LockIcon />
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="Password"
										value={loginDetails.password}
										onChange={handleInput}
									/>
								</div>
								<div className="form_div">
									<label htmlFor="pinCode">
										<LockOutlinedIcon />
									</label>
									<input
										type="text"
										name="pinCode"
										id="pinCode"
										placeholder="Pin Code"
										value={loginDetails.pinCode}
										onChange={handleInput}
									/>
								</div>
								<input
									type="submit"
									value="Sign In"
									onClick={loginUser}
								/>
								<p className="login_signup">
									Don't have an account ?
									<NavLink to="/signup">Sign Up.</NavLink>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
