const User = require("../model/userSchema");

const isEmpty = ({ fname, lname, email, password, cpassword }, res) => {
	if (!fname || !lname || !email || !password || !cpassword) {
		return res.status(422).json({ msg: "All field are require" });
	}
	return false;
};

const generatePinCode = () => {
	return Math.floor(1000000 + Math.random() * 9000000);
};
const generateAccountNumber = () => {
	return Math.floor(100000000000 + Math.random() * 900000000000);
};
const generateTransactionKey = () => {
	return Math.floor(1000000 + Math.random() * 9000000);
};

const AddUser = async (req, res) => {
	const { fname, lname, email, password, cpassword } = req.body;

	isEmpty({ fname, lname, email, password, cpassword }, res);

	const pinCode = generatePinCode();
	const accountNumber = generateAccountNumber();
	const transactionKey = generateTransactionKey();

	try {
		const userExist = await User.findOne({
			$or: [{ pinCode }, { email }],
		});

		if (userExist) {
			return res.status(422).json({ msg: "User already exist" });
		} else if (password.trim() !== cpassword.trim()) {
			return res.status(422).json({ msg: "Password not matched" });
		} else {
			const user = new User({
				fname: fname.trim(),
				lname: lname.trim(),
				email: email.trim(),
				password: password.trim(),
				cpassword: cpassword.trim(),
				pinCode,
				netWorth: 1500,
				accountNumber,
				transactionKey,
			});
			await user.save();
			res.status(201).json({ message: "User Registered" });
		}
	} catch (error) {
		return res.status(422).json({ msg: error });
	}
};

module.exports = AddUser;
