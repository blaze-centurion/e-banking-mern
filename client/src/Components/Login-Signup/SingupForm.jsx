import React, { useState } from "react";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from "@material-ui/icons/Person";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import LockIcon from "@material-ui/icons/Lock";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { NavLink, useHistory } from "react-router-dom";

const SingupForm = () => {
	const [users, Setusers] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		password: "",
		cpassword: "",
	});

	const history = useHistory();

	const handleInput = (event) => {
		const { name, value } = event.target;
		Setusers({ ...users, [name]: value });
	};

	const signUpUser = async (event) => {
		event.preventDefault();
		try {
			const { fname, lname, email, phone, password, cpassword } = users;
			const res = await fetch('/users/api/v1/signup', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ fname, lname, email, phone, password, cpassword })
			});

			const data = await res.json();
			console.log(data);

			if ( res.status === 422 || !data ) {
				window.alert("Invalid Registration")
				console.log("Invalid Registration")
			} else {
				window.alert("Registration Successful");
				console.log("Registration Successful");
				history.push('/login');
			}
			
		} catch (error) {
			
		}
	}

	return (
		<>
			<div className="formBx">
				<form autoComplete="off" method="POST">
					<h2>Sign Up</h2>
					<div className="form_div">
						<label htmlFor="fname">
							<PersonIcon />
						</label>
						<input
							type="text"
							placeholder="Your First Name"
							value={users.name}
							onChange={handleInput}
							name="fname"
							id="fname"
						/>
					</div>
					<div className="form_div">
						<label htmlFor="lname">
							<PersonIcon />
						</label>
						<input
							type="text"
							placeholder="Your Last Name"
							value={users.name}
							onChange={handleInput}
							name="lname"
							id="lname"
						/>
					</div>
					<div className="form_div">
						<label htmlFor="email">
							<MailIcon />
						</label>
						<input
							type="email"
							placeholder="Your Email"
							value={users.email}
							onChange={handleInput}
							name="email"
							id="email"
						/>
					</div>
					<div className="form_div">
						<label htmlFor="phone">
							<PhoneInTalkIcon />
						</label>
						<input
							type="tel"
							placeholder="Mobile Number"
							value={users.phone}
							onChange={handleInput}
							name="phone"
							id="phone"
						/>
					</div>
					<div className="form_div">
						<label htmlFor="password">
							<LockIcon />
						</label>
						<input
							type="password"
							id="password"
							placeholder="Password"
							value={users.password}
							onChange={handleInput}
							name="password"
						/>
					</div>
					<div className="form_div">
						<label htmlFor="cpassword">
							<LockOutlinedIcon />
						</label>
						<input
							type="password"
							id="cpassword"
							placeholder="Confirm Password"
							value={users.cpassword}
							onChange={handleInput}
							name="cpassword"
						/>
					</div>
					<input
						type="submit"
						value="Sign Up"
						name="signup"
						onClick={signUpUser}
					/>
					<p className="login_signup">
						Already have an account ?
						<NavLink to="/login">Login.</NavLink>
					</p>
				</form>
			</div>
		</>
	);
};

export default SingupForm;
