const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
	{
		productName: {
			type: String,
			required: true,
			trim: true,
		},
		productDescription: {
			type: String,
			required: true,
			trim: true,
		},
		productPrice: {
			type: Number,
			required: true,
		},
		DiscountPercentage: {
			type: Number,
			required: true,
		},
		DiscountedPrice: {
			type: Number,
			required: true,
		},
		productCategory: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category",
			required: true,
		},
	},
	{ timeStamps: true }
);

module.exports = new mongoose.model("Product", productSchema);
