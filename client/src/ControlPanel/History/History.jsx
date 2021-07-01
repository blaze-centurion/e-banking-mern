import React from "react";
import "./History.css";

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

const History = (props) => {
	return (
		<>
			<div className="HistoryContentContainer">
				<div className="tableBx">
					<table className="table">
						<thead>
							<tr>
								<th>Sender</th>
								<th>Recipient</th>
								<th>Amount Money</th>
								<th>Transfer Title</th>
								<th>Date</th>
								<th>Confirmation</th>
							</tr>
						</thead>
						<tbody>
							
							{Object.entries(props.history).map(
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

export default History;
