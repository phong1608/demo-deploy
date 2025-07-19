const express = require('express');
const router = express.Router();

const { capturePayment, verifyPayment } = require('../controllers/payments');
const { auth, isAdmin, isInstructor, isStudent } = require('../middleware/auth');

router.post('/capturePayment', auth,isInstructor, capturePayment);
router.post('/verifyPayment', auth, verifyPayment);

module.exports = router