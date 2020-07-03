const Giftcard = require('../models/Giftcard');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get giftcards
// @route   GET /giftcards
// @route   GET /giftcards/:id
// @access  Public

exports.getGiftcards = asyncHandler(async (req, res, next) => {
	let query;

	if (req.params.id) {
		query = Giftcard.find({ _id: req.params.id });
	} else {
		query = Giftcard.find({});
	}
	const giftcards = await query;

	res.status(200).json({
		success: true,
		count: giftcards.length,
		data: giftcards,
	});
});

// @desc    Add giftcard
// @route   POST /giftcards
// @access  Public

exports.addGiftcard = asyncHandler(async (req, res, next) => {
	let query = Giftcard.create(req.body);

	const giftcard = await query;

	res.status(201).json({
		success: true,
		count: giftcard.length,
		data: giftcard,
	});
});

// @desc    Delete giftcard by _id
// @route   DELETE /giftcards/:id
// @access  Public

exports.deleteGiftcard = asyncHandler(async (req, res, next) => {
	let query = Giftcard.deleteOne({ _id: req.params.id });

	const giftcard = await query;

	res.status(204);
});

// @desc    Update giftcard by _id
// @route   DELETE /giftcards/:id
// @access  Public

exports.updateGiftcard = asyncHandler(async (req, res, next) => {
	let giftcard = await Giftcard.findById(req.params.id);

	if (!giftcard) {
		return next(
			new ErrorResponse(
				`No giftcard with the id of ${req.params.bootcampId}`,
				404
			)
		);
	}

	giftcard = await Giftcard.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});

	res.status(200).json({
		success: true,
		data: giftcard,
	});
});
