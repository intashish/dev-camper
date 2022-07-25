const Bootcamp = require('../model/Bootcamp');

//@desc      Get all bootcamps
//@route     GET /api/bootcamps
//@type      public
exports.getBootcamps = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.find();
		res
			.status(200)
			.json({ status: 'success', count: bootcamp.length, data: bootcamp });
	} catch (error) {
		res.status(400).json({ status: 'fail', error: error });
	}
};

//@desc      get bootcamp by id
//@route     GET /api/bootcamps/:id
//@type      public
exports.getBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findById(req.params.id);
		if (!bootcamp) {
			return res.status(400).json({ status: 'fail' });
		}

		res
			.status(200)
			.json({ status: 'success', count: bootcamp.length, data: bootcamp });
	} catch (error) {
		res.status(400).json({ status: 'fail', error: error });
	}
};

//@desc      Create new bootcamp
//@route     Post  /api/bootcamps
//@type      private
exports.createBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.create(req.body);
		res.status(201).json({ status: 'success', data: bootcamp });
	} catch (error) {
		res.status(400).json({ status: 'fail', error: error });
	}
};

//@desc      Update new bootcamp
//@route     PUT  /api/bootcamps/:id
//@type      private
exports.updateBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!bootcamp) {
			return res.status(400).json({ status: false });
		}
		res.status(200).json({ status: true, data: bootcamp });
	} catch (error) {
		res.status(400).json({ status: false, error: error });
	}
};

//@desc      Delete new bootcamp
//@route     Delete  /api/bootcamps/:id
//@type      private
exports.deleteBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
		if (!bootcamp) {
			return res.status(400).json({ status: false });
		}
		res.status(200).json({ status: true, data: {} });
	} catch (error) {
		res.status(400).json({ status: false, error: error });
	}
};
