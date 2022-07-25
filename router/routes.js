const express = require('express');
const router = express.Router();
const {
	getBootcamp,
	getBootcamps,
	addBootcamp,
	deleteBootcamp,
	updateBootcamp,
} = require('../controller/bootcamps');

router.route('/').get(getBootcamps).post(addBootcamp);
router
	.route('/:id')
	.get(getBootcamp)
	.delete(deleteBootcamp)
	.put(updateBootcamp);

module.exports = router;
