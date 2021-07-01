const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");

const isEmpty = ({ email, password, pinCode }, res) => {
	if (!email || !password || !pinCode) {
		return res.status(422).json({ msg: "All field are require" });
	}
	return false;
};

const LoginUer = async (req, res) => {
	try {
		let token;
		const { email, password, pinCode } = req.body;

		isEmpty({ email, password, pinCode }, res);

		const userLogin = await User.findOne({ email });

		if (userLogin) {
			const isMatch = bcrypt.compare(password, userLogin.password);

			if (!isMatch) {
				res.status(400).json({ message: "Invalid Credentials" });
			} else {
				token = await userLogin.generateAuthToken();

				res.cookie("jwtoken", token, {
					expires: new Date(Date.now() + 25892000000),
					httpOnly: true,
				});

				res.json({ message: "User Login Successfuly" });
			}
		} else {
			res.status(400).json({ message: "Invalid Credentials" });
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = LoginUer;
