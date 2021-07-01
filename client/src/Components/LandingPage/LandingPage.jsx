import React from "react";
import './LandingPage.css'
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
	return (
		<>
			<section className="landing_section">
				<div className="banner_container">
					<div className="content">
						<div className="title">One Stop For Your Bank</div>
						<div className="desc">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Delectus officia suscipit <br /> fuga sequi
							facere est!
						</div>
						<NavLink to="/login" className="getStarted">
							Get Started
						</NavLink>
					</div>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
