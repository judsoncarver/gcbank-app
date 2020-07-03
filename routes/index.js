import express from 'express';
const router = express.Router();

/* GET homepage */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Piggy Bank' });
});

export default router;
