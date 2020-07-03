const Giftcards = require('../models/Giftcard');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get giftcards
// @route   GET /giftcards
// @access  Public

exports.getGiftcards = asyncHandler(async (req, res, next) => {
	let query;

	if (req.params.id) {
		query = Giftcards.find({ number: req.params.id });
	} else {
		query = Giftcards.find({});
	}
	const giftcards = await query;

	res.status(200).json({
		success: true,
		count: giftcards.length,
		data: giftcards,
	});
});

exports.addGiftcard = asyncHandler(async (req, res, next) => {
	let query = Giftcards.create(req.body);

	const giftcard = await query;

	res.status(201).json({
		success: true,
		count: giftcard.length,
		data: giftcard,
	});
});

exports.deleteGiftcard = asyncHandler(async (req, res, next) => {
	let query = Giftcards.deleteOne({ _id: req.params.id });

	const giftcard = await query;

	res.status(204).json({
		success: true,
	});
});
