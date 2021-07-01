import React, { useContext } from "react";
import CreditModel from "./CreditModel";
import "./Operations.css";
import Withdraw from "./Withdraw";
import { UserDataProvider } from "../MainContainer";

const TableBodyRow = (props) => {
	return (
		<>
			<tr>
				<td data-label="Sender">
					<span className="name">{props.senderName}</span>
					<br />
					<span className="id">{props.senderAccount}</span>
				</td>
				<td data-label="Recipient">
					<span className="name">{props.recipientName}</span>
					<br />
					<span className="id">{props.recipientAccount}</span>
				</td>
				<td data-label="Amount Money">
					<span>{props.amountMoney} Rs</span>
				</td>
				<td data-label="Transfer Title">
					<span>{props.transferType}</span>
				</td>
				<td data-label="Date">
					<span>20.04.2021, 11:49 AM</span>
				</td>
				<td data-label="Confirmation">
					<a href="" className="btn">
						Download PDF
					</a>
				</td>
			</tr>
		</>
	);
};

const Operations = () => {
	const userData = useContext(UserDataProvider);

	return (
		<>
			<CreditModel />
			<Withdraw />
			<div className="OperationContentContainer">
				<div className="cardRow">
					<div className="OperationCardBx">
						<div className="card">
							<div className="cardHeader">
								<div className="cardHeaderRight">
									<span>Balance</span>
								</div>
								<div className="cardHeaderLeft">
									<span>
										{userData.netWorth}
										<span className="curr"> Rs</span>
									</span>
								</div>
							</div>
							<div className="cardContent">
								<div className="title">
									<p>Currencies</p>
								</div>
								<div className="desc">
									<ul>
										<li>
											<span className="title">
												Rupees
											</span>
											<span className="amount">
												Rs 15,000
											</span>
										</li>
										<li>
											<span className="title">
												Rupees
											</span>
											<span className="amount">
												Rs 15,000
											</span>
										</li>
										<li>
											<span className="title">
												Rupees
											</span>
											<span className="amount">
												Rs 15,000
											</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="cardFooter">
								<a
									onClick={(e) => e.preventDefault()}
									href=""
									className="btn credit"
								>
									Credit funds
								</a>
								<a
									onClick={(e) => e.preventDefault()}
									href=""
									className="btn withdraw"
								>
									Withdraw funds
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="tableBx">
					<table className="table">
						<thead>
							<tr>
								<th>Sender</th>
								<th>Recipient</th>
								<th>Amount Money</th>
								<th>Transfer Type</th>
								<th>Date</th>
								<th>Confirmation</th>
							</tr>
						</thead>
						<tbody>
							{Object.entries(userData.operations).map(
								([
									key,
									{
										recipient,
										sender,
										transactionAmount,
										transferType,
										_id,
									},
								]) => {
									return (
										<TableBodyRow
											key={_id}
											senderName={sender[0].userName}
											senderAccount={
												sender[0].AccountNumber
											}
											recipientName={
												recipient[0].userName
											}
											recipientAccount={
												recipient[0].AccountNumber
											}
											amountMoney={transactionAmount}
											transferType={transferType}
										/>
									);
								}
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Operations;
