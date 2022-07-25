//@desc      Get all bootcamps
//@route     GET /api/bootcamps
//@type      public
exports.getBootcamps = (req, res, next) => {
	res.status(200).json({ status: 'success', data: ' get all bootcamps' });
};

//@desc
//@route     GET /api/bootcamps/:id
//@type      public
exports.getBootcamp = (req, res, next) => {
	res
		.status(200)
		.json({ status: 'success', data: `get bootcamp ${req.params.id}` });
};

//@desc      Create new bootcamp
//@route     Post  /api/bootcamps
//@type      private
exports.addBootcamp = (req, res, next) => {
	res.status(200).json({ status: 'success', data: 'create new bootcamp' });
};

//@desc      Update new bootcamp
//@route     PUT  /api/bootcamps/:id
//@type      private
exports.updateBootcamp = (req, res, next) => {
	res
		.status(200)
		.json({ status: 'success', data: `Update bootcamp ${req.params.id}` });
};

//@desc      Delete new bootcamp
//@route     Delete  /api/bootcamps/:id
//@type      private
exports.deleteBootcamp = (req, res, next) => {
	res
		.status(200)
		.json({ status: 'success', data: `Delete bootcamp ${req.params.id}` });
};
