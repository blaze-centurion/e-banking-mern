import React from "react";
import signUpPic from "../../images/signup.svg";
import SignupForm from "./SingupForm";
import './Signup.css';

const Signup = () => {
	return (
		<>
			<section id="signup_section">
				<div className="container">
					<div className="signupBx">
						<SignupForm />
						<div className="imgBx">
							<img src={signUpPic} alt="Signup" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signup;
