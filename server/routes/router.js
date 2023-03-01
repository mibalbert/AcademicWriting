/** router.js */

const express = require('express');
const router = express.Router();

const userController = require('../contollers/userController');

router.get('/', userController.homeGET);
router.get('/login', userController.loginGET);
router.post('/login', userController.loginPOST)
router.get('/register', userController.registerGET);
router.post('/register', userController.registerPOST);
router.get('/logout', userController.logout);
router.get('/customer-home', userController.customerHomeGET)
router.get('/order/:uuid', userController.orderID);
router.get('/pricing', userController.pricingGET);
router.get('/summary', userController.summary);
router.get('/about', userController.about);
router.get('/profile', userController.profileGET);
router.post('/profile', userController.profilePOST);
router.get('/billing', userController.billingGET);
router.post('/billing', userController.billingPOST);
router.get('/security', userController.securityGET)
router.get('/notifications-settings', userController.notificationsGET)
router.get('/customer-orders', userController.customerOrdersGET)

// router.get('/testing/:id', userController.testing)
router.post('/testing', userController.testingPOST)


module.exports = router;