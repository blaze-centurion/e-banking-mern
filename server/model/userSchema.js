const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
	fname: {
		type: String,
		required: true,
	},
	lname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Please Enter Valid Email!");
			}
		},
	},
	password: {
		type: String,
		required: true,
	},
	cpassword: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	pinCode: {
		type: Number,
		min: 1000000,
		max: 9999999,
		unique: true,
		required: true,
	},
	accountNumber: {
		type: Number,
		min: 100000000000,
		max: 999999999999,
	},
	transactionKey: {
		type: Number,
		min: 1000000,
		max: 9999999,
	},
	netWorth: Number,
	history: [
		{
			sender: [
				{
					userName: String,
					AccountNumber: Number,
				},
			],
			recipient: [
				{
					userName: String,
					AccountNumber: Number,
				},
			],
			transactionAmount: Number,
			transferType: {
				type: String,
				enum: ["credit", "withdraw"],
			},
			date: String,
		},
	],
	operations: [
		{
			sender: [
				{
					userName: String,
					AccountNumber: Number,
				},
			],
			recipient: [
				{
					userName: String,
					AccountNumber: Number,
				},
			],
			transactionAmount: Number,
			transferType: {
				type: String,
				enum: ["credit", "withdraw"],
			},
			date: String,
		},
	],
	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
});

userSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 12);
		this.cpassword = await bcrypt.hash(this.cpassword, 12);
	}
	next();
});

userSchema.methods.generateAuthToken = async function () {
	try {
		let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
		this.tokens = this.tokens.concat({ token });
		await this.save();
		return token;
	} catch (error) {
		console.log(error);
	}
};

userSchema.methods.addOperation = async function (
	sender,
	recipient,
	transactionAmount,
	transferType
) {
	try {
		console.log("hello add operations");
		const date = new Date().toLocaleString();
		this.operations = this.operations.concat({
			sender,
			recipient,
			transactionAmount,
			transferType,
			date,
		});
		await this.save();
		return this.operations;
	} catch (error) {
		console.log(error);
		return false;
	}
};

userSchema.methods.addHistory = async function (
	sender,
	recipient,
	transactionAmount,
	transferType
) {
	try {
		const date = new Date().toLocaleString();
		this.history = this.history.concat({
			sender,
			recipient,
			transactionAmount,
			transferType,
			date,
		});
		await this.save();
		return this.history;
	} catch (error) {
		console.log("Error from addHistory in userSchema file: ", error);
		return false;
	}
};

const Usermodel = mongoose.model("User", userSchema);

module.exports = Usermodel;
