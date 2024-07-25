const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		if (!process.env.MONGO_URI) {
			throw new Error("MONGO_URI not set in environment variables !");
		}
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("DB Connected...");
	} catch (err) {
		console.error("Error in connectDB : ", err.message);
		throw err;
	}
};

module.exports = connectDB;
