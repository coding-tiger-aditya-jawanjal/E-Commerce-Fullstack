const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timeStamps: true }
);

module.exports = new mongoose.model("User", userSchema);
