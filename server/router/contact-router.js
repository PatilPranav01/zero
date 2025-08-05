const express = require('express');
const router = express.Router();
const contactForm = require('../controllers/contact-controller');

console.log("✅ Contact Router Loaded");

router.post('/contact', contactForm);

module.exports = router;
