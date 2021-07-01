const User = require("../model/userSchema");

const getData = async (req, res) => {
	try {
		const _id = req._id;
		const userData = await User.findOne({ _id });
		const { email, fname, lname, netWorth, operations } = userData;
		return res.status(200).json({ msg: userData });
	} catch (error) {
		console.error(error);
	}
};

module.exports = getData;
