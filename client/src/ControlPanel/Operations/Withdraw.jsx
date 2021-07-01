import React, { useContext, useState } from "react";
import "./CreditModel.css";
import CloseIcon from "@material-ui/icons/Close";
import { UserDataProvider } from "../MainContainer";

const Withdraw = () => {
	const userData = useContext(UserDataProvider);

	const [inputData, setInputData] = useState({
		userName: "",
		userAccount: "",
		userPinCode: "",
		amountMoney: "",
		transferType: "withdraw",
	});

	const withdrawBtn = document.querySelector(".withdraw");

	if (withdrawBtn != null) {
		withdrawBtn.addEventListener("click", () => {
			document
				.querySelector(".withdrawModelContainer")
				.classList.add("active");
			setInputData({
				...inputData,
				userName: `${userData.fname} ${userData.lname}`,
				userAccount: userData.accountNumber,
			});
		});
	}

	const handleInput = (event) => {
		const { name, value } = event.target;
		setInputData({ ...inputData, [name]: value });
	};

	const withdrawMoney = async (event) => {
		event.preventDefault();

		const { userName, userPinCode, amountMoney, transferType } = inputData;

		const res = await fetch("/users/api/v1/credit", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userName,
				userPinCode,
				amountMoney,
				transferType,
			}),
			credentials: "include",
		});
		const data = await res.json();
		if (res.status !== 201 || !data) {
			window.alert(data.message);
		} else {
			window.alert("Withdraw successfull")
			document
					.querySelector(".withdrawModelContainer")
					.classList.remove("active");
		}
	};

	return (
		<>
			<div className="modelContainer withdrawModelContainer">
				<div className="container">
					<a
						href="/operations"
						onClick={(e) => {
							e.preventDefault();
							document
								.querySelector(".withdrawModelContainer")
								.classList.remove("active");
							setInputData({
								userPinCode: "",
								amountMoney: "",
							});
						}}
						className="close_btn"
					>
						<CloseIcon />
					</a>
					<div className="header">
						<p>Withdraw Money</p>
					</div>
					<div className="formBx">
						<form autoComplete="off" method="POST">
							<div className="page slide-page">
								<div className="title">User Info:</div>
								<div className="field">
									<div className="label">Your Name</div>
									<input
										type="text"
										name="userName"
										value={inputData.userName}
										readOnly
									/>
								</div>
								<div className="field">
									<div className="label">
										Your Account No.
									</div>
									<input
										type="tel"
										name="userAccount"
										value={inputData.userAccount}
										readOnly
									/>
								</div>
								<div className="field">
									<div className="label">Your Pin Code</div>
									<input
										type="tel"
										name="userPinCode"
										value={inputData.userPinCode}
										onChange={handleInput}
									/>
								</div>
								<div className="field">
									<div className="label">
										Transaction Amount
									</div>
									<input
										type="number"
										name="amountMoney"
										value={inputData.amountMoney}
										onChange={handleInput}
									/>
								</div>
								<div className="field btn-field">
									<button
										className="btn submit"
										type="submit"
										onClick={withdrawMoney}
									>
										Withdraw
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Withdraw;
