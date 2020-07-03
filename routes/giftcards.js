import express from 'express';
const fs = require('fs');
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

// use giftcards junk data for now
const rawdata = fs.readFileSync('data/giftcards.json');
const data = JSON.parse(rawdata);

const {
	getGiftcards,
	addGiftcard,
	updateGiftcard,
	deleteGiftcard,
} = require('../controllers/giftcards');

/**
 * GET giftcards/
 * GET giftcards/:id
 */
router
	.get('/', async (req, res, next) => {
		getGiftcards(req, res, next);
	})
	.get('/:id', async (req, res, next) => {
		getGiftcards(req, res, next);
	})
	.post('/', async (req, res, next) => {
		addGiftcard(req, res, next);
	})
	.put('/:id', async (req, res, next) => {
		updateGiftcard(req, res, next);
	})
	.delete('/:id', async (req, res, next) => {
		deleteGiftcard(req, res, next);
	});

export default router;
