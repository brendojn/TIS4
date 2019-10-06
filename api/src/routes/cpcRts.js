const { Router } = require('express');
const controller = require('./../controllers/cpcCtrl');
const userController = require('../controllers/userCtrl');
const auth = require('./../middlewares/auth');
const router = new Router();

/**
 * Show all cpc
 */
router.get('/classroom', auth.authenticate(), async (req, res) => {
    controller.showAllNearsVacancies(req, res);
    });

/**
 * Find a job vacancie by id 
 */
router.get('/:id', auth.authenticate(), (req, res) => {
    controller.findById(req, res);
});

exports.router = router;