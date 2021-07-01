const express = require("express");
const Router = express.Router();
const addUser = require("../controller/signup");
const loginUser = require("../controller/login");
const authenticate = require("../middleware/authenticate");
const getData = require("../controller/getData");
const creditMoney = require("../controller/creditMoney");

Router.get("/", (req, res) => {
	res.send("Hello from the route");
});

Router.post("/signup", addUser);
Router.post("/login", loginUser);
Router.get("/isLogin", authenticate, (req, res) => {
	res.send(req.rootUser);
});
Router.get("/getData", authenticate, getData);
Router.post("/credit", authenticate, creditMoney);

module.exports = Router;
