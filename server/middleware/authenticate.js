const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");

const isUserLogin = async (req, res, next) => {
	try {
		const token = req.cookies.jwtoken;
		const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
		const rootUser = await User.findOne({
			_id: verifyToken._id,
			"tokens.token": token,
		});

		if (!rootUser) throw new Error("User not found!");

		const { fname, lname, email, _id, accountNumber, history } = rootUser;

		req.token = token;
		req.rootUser = { fname, lname, email, _id, accountNumber, history };
		req._id = rootUser._id;
		req.pinCode = rootUser.pinCode;
		req.user = rootUser;
		rootUser ? (req.isLogin = true) : (req.isLogin = false);
		next();
	} catch (error) {
		res.status(401).send("Unauthorized: No token provided");
		console.log(error);
	}
};

module.exports = isUserLogin;
