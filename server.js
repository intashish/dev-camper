const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./router/routes');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

//connext to DB
connectDB();

// Body parser
app.use(express.json());

if (process.env.ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', router);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
	console.log(`listening to port : ${port}`.yellow.bold.underline);
});

process.on('unhandledRejection', (err, promise) => {
	console.log(`Error : ${err.message}`.red);
	server.close(() => process.exit(1));
});
