const { Router } = require('express');
const controller = require('./controller');
// const auth = require('./../../services/auth'); // AINDA NAO IMPLEMENTADO
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = new Router();
const uploadFields = upload.fields([
    { name: 'profile-img'},
    { name: 'header-img'},
])

router.post('/upload', auth.authenticate(), uploadFields, (req, res) => {
    controller.upload(req, res);
});

router.get('/all', auth.authenticate(), (req, res) => {
    controller.show(req, res);
});

router.get('/count', auth.authenticate(), (req, res) => {
    controller.countAll(req, res);
});

router.get('/profile', auth.authenticate(), (req, res) => {
    controller.profile(req, res);
});

router.get('/profile/:id', auth.authenticate(), (req, res) => {
    controller.profile(req, res);
});

router.get('/', auth.authenticate(), (req, res) => {
    controller.find(req, res);
});

router.get('/:id', auth.authenticate(), (req, res) => {
    controller.find(req, res);
});

router.post('/', (req, res) => {
    controller.register(req, res);
});

router.put('/', auth.authenticate(), (req, res) => {
    controller.update(req, res);
});

exports.router = router;