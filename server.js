const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./router/routes');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });
// Body parser
app.use(express.json());

if (process.env.ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('listening to port 3000');
});
