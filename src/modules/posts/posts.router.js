const router = require("express").Router();
const controller = require('./posts.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;