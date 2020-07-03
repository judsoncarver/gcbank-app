/**
 * @name gcbank-app
 * @author Judson Carver
 */

const express = require('express');
const dotenv = require('dotenv');

const bodyParser = require('body-parser');
const createError = require('http-errors');
const path = require('path');
const logger = require('morgan');

const port = 3000;

import regeneratorRuntime from 'regenerator-runtime';
import index from './routes/index';
import giftcards from './routes/giftcards';
const connectDB = require('./config/db');

const app = express();

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', index);
app.use('/giftcards', giftcards);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

app.listen(port, () =>
	console.log(`Service listening at http://localhost:${port}`)
);

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
