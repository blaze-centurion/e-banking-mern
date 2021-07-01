import React, { useContext, useEffect } from "react";
import { UserDataProvider } from "../MainContainer";

const FormBx = ({ inputData, setInputData, deactiveClasses }) => {
	const slide_page = document.querySelector(".slide-page");
	const bullet = document.querySelectorAll(".bullet");
	const progressText = document.querySelectorAll(".step p");
	const progressCheck = document.querySelectorAll(".step .check");

	const activeClasses = () => {
		slide_page.style.marginLeft = "-50%";
		bullet[0].classList.add("active");
		progressCheck[0].classList.add("active");
		progressText[0].classList.add("active");
	};

	const gotoNextSlide = (event) => {
		event.preventDefault();
		if (
			inputData.userName &&
			inputData.userAccount &&
			inputData.userPinCode
		) {
			activeClasses();
		} else {
			window.alert("Please fill all fields");
		}
	};

	const gotoPrevSlide = (event) => {
		event.preventDefault();
		slide_page.style.marginLeft = "0%";
		deactiveClasses();
	};

	const creditBtn = document.querySelector(".credit");

	if (creditBtn != null) {
		creditBtn.addEventListener("click", () => {
			document
				.querySelector(".creditModelContainer")
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

	useEffect(() => {
		setInputData({ ...inputData, transferType: "credit" });
	}, []);

	// calling the api for crediting money

	const creditMoney = async (event) => {
		event.preventDefault();
		const {
			transferType,
			userName,
			userAccount,
			senderName,
			userPinCode,
			senderAccount,
			senderTransactionKey,
			amountMoney,
		} = inputData;
		const res = await fetch("/users/api/v1/credit", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				transferType,
				userName,
				userAccount,
				senderName,
				userPinCode,
				senderAccount,
				senderTransactionKey,
				amountMoney,
			}),
			credentials: "include",
		});
		const data = await res.json();
		if (res.status !== 201 || !data) {
			window.alert(data.message);
		} else {
			window.alert("Credit successfull")
			document
					.querySelector(".withdrawModelContainer")
					.classList.remove("active");
		}
	};

	const userData = useContext(UserDataProvider);

	return (
		<>
			<div className="formBx">
				<form autoComplete="off" method="POST">
					<div className="page slide-page">
						<div className="title">Your Info:</div>
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
							<div className="label">Your Account No.</div>
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
						<div className="field btn-field">
							<button
								className="btn next"
								onClick={gotoNextSlide}
							>
								Next
							</button>
						</div>
					</div>
					<div className="page">
						<div className="title">Sender Info:</div>
						<div className="field">
							<div className="label">Sender Name</div>
							<input
								type="text"
								name="senderName"
								value={inputData.senderName}
								onChange={handleInput}
							/>
						</div>
						<div className="field">
							<div className="label">Sender Account No.</div>
							<input
								type="tel"
								name="senderAccount"
								value={inputData.senderAccount}
								onChange={handleInput}
							/>
						</div>
						<div className="field">
							<div className="label">Sender Transaction Key</div>
							<input
								type="tel"
								name="senderTransactionKey"
								value={inputData.senderTransactionKey}
								onChange={handleInput}
							/>
						</div>
						<div className="field">
							<div className="label">Transaction Amount</div>
							<input
								type="number"
								name="amountMoney"
								value={inputData.amountMoney}
								onChange={handleInput}
							/>
						</div>
						<div className="field btn-field">
							<button
								className="btn prev"
								onClick={gotoPrevSlide}
							>
								Prev
							</button>
							<button
								type="submit"
								onClick={creditMoney}
								className="btn submit"
							>
								Credit
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default FormBx;
