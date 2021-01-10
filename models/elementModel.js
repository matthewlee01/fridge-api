const mongoose = require('mongoose');

const ElementSchema = new mongoose.Schema({
	type: {
		type: String,
		lowercase: true,
		required: true
	},
	x: {
		type: Number,
		required: true
	},
	y: {
		type: Number,
		required: true
	},
	width: {
		type: Number,
		required: true
	},
	height: {
		type: Number,
		required: true
	value: {
		type: String,
		default: "no value"
	}
});

const Element = mongoose.model("Element", ElementSchema);
module.exports = Element;
