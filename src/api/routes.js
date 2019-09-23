const { Router } = require('express');
const user = require('./user').router;
const router = Router();

router.use(bodyParser.json({limit: '10mb'}));

router.use('/user', user);

exports.router = router; 