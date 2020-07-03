import express from 'express';
const router = express.Router();

/* GET homepage */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Gift Card Bank' });
});

export default router;
