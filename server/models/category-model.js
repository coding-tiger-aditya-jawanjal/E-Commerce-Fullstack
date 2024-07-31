const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
	{
		categoryName: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
	},
	{ timeStamps: true }
);

module.exports = new mongoose.model("Category", CategorySchema);
