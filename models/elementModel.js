const mongoose = require('mongoose');

const ElementSchema = new mongoose.Schema({
	type: {
		type: String,
		lowercase: true,
		required: true
	},
	x: {
		type: String,
		required: true
	},
	y: {
		type: String,
		required: true
	},
	width: {
		type: String,
		required: true
	},
	height: {
		type: String,
		required: true
	},
	value: {
		type: String,
		default: "no value"
	},
        bgColor: {
                type: String,
                required: true
        }
});

const Element = mongoose.model("Element", ElementSchema);
module.exports = Element;
