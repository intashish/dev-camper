const mongoose = require('mongoose');

const connectDB = async () => {
	console.log(process.env.MONGO_URI);
	const conn = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
	});

	console.log(`MongoDB connected : ${conn.connection.host}`);
};
module.exports = connectDB;
