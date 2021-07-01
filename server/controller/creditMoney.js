const User = require("../model/userSchema");

const CreditMoneyInAccount = async (
	req,
	res,
	{
		transferType,
		userName,
		senderName,
		senderAccount,
		senderTransactionKey,
		amountMoney,
	}
) => {
	try {
		if (
			!userName ||
			!senderName ||
			!senderAccount ||
			!senderTransactionKey
		) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const sender = await User.findOne({
			accountNumber: senderAccount,
			transactionKey: senderTransactionKey,
		});

		if (sender) {
			if (amountMoney <= sender.netWorth) {
				req.user.netWorth += Number(amountMoney);
				sender.netWorth -= Number(amountMoney);

				// add operation in both sender and recipient row
				await req.user.addOperation(
					{ userName: senderName, AccountNumber: sender.accountNumber },
					{ userName, AccountNumber: req.user.accountNumber },
					amountMoney,
					transferType
				);
				await sender.addOperation(
					{ userName: senderName, AccountNumber: senderAccount },
					{ userName, AccountNumber: req.user.accountNumber },
					amountMoney,
					"withdraw"
				);

				// add history in both sender and recipient row
				await req.user.addHistory(
					{ userName: senderName, AccountNumber: senderAccount },
					{ userName, AccountNumber: req.user.accountNumber },
					amountMoney,
					transferType
				);

				await sender.addHistory(
					{ userName: senderName, AccountNumber: senderAccount },
					{ userName, AccountNumber: req.user.accountNumber },
					amountMoney,
					"withdraw"
				);

				await sender.save();
				await req.user.save();
				return res.status(201).json({ message: "Credit Successfuly" });
			}
			return res.status(400).json({ message: "Not enough money" });
		}
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};

const withdrawMoney = async (
	req,
	res,
	{ amountMoney, transferType, userName }
) => {
	try {
		if (amountMoney <= req.user.netWorth) {
			req.user.netWorth -= Number(amountMoney);
			await req.user.addOperation(
				{ userName, AccountNumber: req.user.accountNumber },
				{ userName, AccountNumber: req.user.accountNumber },
				amountMoney,
				transferType
			);

			await req.user.addHistory(
				{ userName, AccountNumber: req.user.accountNumber },
				{ userName, AccountNumber: req.user.accountNumber },
				amountMoney,
				transferType
			);

			await req.user.save();
			return res.status(201).json({ message: "Credit Successfuly" });
		}
		return res.status(400).json({ message: "Not enough money" });
	} catch (error) {}
};

const creditMoney = async (req, res) => {
	console.log("hello add operations");
	try {
		const {
			transferType,
			userName,
			senderName,
			userPinCode,
			senderAccount,
			senderTransactionKey,
			amountMoney,
		} = req.body;

		if (!transferType || !userPinCode || !amountMoney) {
			return res.status(400).json({ message: "All fields are required" });
		} else if (req.pinCode !== Number(userPinCode.trim())) {
			return res.status(400).json({ message: "Invalid Pincode" });
		}

		if (transferType == "credit") {
			CreditMoneyInAccount(req, res, {
				transferType,
				userName,
				senderName,
				senderAccount,
				senderTransactionKey,
				amountMoney,
			});
		} else if (transferType == "withdraw") {
			withdrawMoney(req, res, { amountMoney, transferType, userName });
		}
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "Not Successful" });
	}
};

module.exports = creditMoney;
