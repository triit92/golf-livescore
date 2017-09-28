const express = require('express');
const router = express.Router();

const passportConfig = require('../../config/passport');
const userController = require('./user.controller');


router.get('/login', userController.getLogin);
router.get('/logout', userController.logout);
router.get('/forgot', userController.getForgot);
router.get('/reset/:token', userController.getReset);
router.get('/signup', userController.getSignup);
router.get('/account', passportConfig.isAuthenticated, userController.getAccount);
router.get('/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);



router.post('/signup', userController.postSignup);
router.post('/reset/:token', userController.postReset);
router.post('/forgot', userController.postForgot);
router.post('/login', userController.postLogin);
router.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
router.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
router.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);

module.exports = router;