const mongoose = require('mongoose');

const GiftcardSchema = new mongoose.Schema({
	number: {
		type: Number,
		trim: true,
		required: [true, 'Please add a giftcard number'],
	},
	pin: {
		type: Number,
		required: [true, 'Please add a pin'],
	},
	checkedOut: {
		type: Boolean,
		required: [true, 'Please set a status'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Giftcard', GiftcardSchema);
