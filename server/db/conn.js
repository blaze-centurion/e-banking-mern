const mongoose = require("mongoose");
const DB = process.env.DB_CONN_URI;

const Pusher = require("pusher");

const pusher = new Pusher({
	appId: "1194054",
	key: "0d2fcefb63715799924c",
	secret: "30baadf1b3b5af34a0e0",
	cluster: "ap2",
	useTLS: true,
});

mongoose.connect(DB, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
}).then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log(err);
});

const db = mongoose.connection;

db.once("open", () => {

	try {
		const userCollection = db.collection("users");
		const changeStream = userCollection.watch();
		changeStream.on("change", (change) => {
			try {
				if (change.operationType == "update") {
					console.log(change);
					const updatedData = change.updateDescription.updatedFields;
					pusher.trigger("operations", "creditMoney", {
						netWorth: updatedData.netWorth,
						operations: updatedData.operations,
						history: updatedData.history,
					});
				}
			} catch (error) {
				console.log(error);
			}
		});
	} catch (error) {
        console.log(error);
    }
});
