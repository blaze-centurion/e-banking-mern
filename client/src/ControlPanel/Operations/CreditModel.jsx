import React, { useState } from "react";
import "./CreditModel.css";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import FormBx from "./FormBx";

const CreditModel = () => {
	const [inputData, setInputData] = useState({
		userName: "",
		userAccount: "",
		userPinCode: "",
		senderName: "",
		senderAccount: "",
		senderTransactionKey: "",
		amountMoney: "",
		transferType: "",
	});

	const slide_page = document.querySelector(".slide-page");
	const bullet = document.querySelectorAll(".bullet");
	const progressText = document.querySelectorAll(".step p");
	const progressCheck = document.querySelectorAll(".step .check");

	const deactiveClasses = () => {
		slide_page.style.marginLeft = "0%";
		bullet[0].classList.remove("active");
		progressCheck[0].classList.remove("active");
		progressText[0].classList.remove("active");
	};

	return (
		<>
			<div className="modelContainer creditModelContainer">
				<div className="container">
					<a
						href="/operations"
						onClick={(e) => {
							e.preventDefault();
							document
								.querySelector(".creditModelContainer")
								.classList.remove("active");
							deactiveClasses();
							setInputData({
								...inputData,
								userPinCode: "",
								senderTransactionKey: "",
								amountMoney: "",
							});
						}}
						className="close_btn"
					>
						<CloseIcon />
					</a>
					<div className="header">
						<p>Credit Money</p>
					</div>
					<div className="progress_bar">
						<div className="step">
							<p>Your Info</p>
							<div className="bullet">
								<span>1</span>
							</div>
							<CheckIcon className="check" />
						</div>
						<div className="step">
							<p>Sender Info</p>
							<div className="bullet">
								<span>2</span>
							</div>
							<CheckIcon className="check" />
						</div>
					</div>
					<FormBx
						inputData={inputData}
						setInputData={setInputData}
						deactiveClasses={deactiveClasses}
					/>
				</div>
			</div>
		</>
	);
};

export default CreditModel;
