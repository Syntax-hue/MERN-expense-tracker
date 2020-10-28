const router = require('express').Router();

const errorHandler = require('../middleware/errorHandler');
const transactionsRouter = require('./transactions/transactions.router');
// const postsRouter = require('./posts/posts.router');


router.get('/', (req, res) => res.send('ok'));
router.use('/transactions', transactionsRouter);
// router.use('/posts', postsRouter);
router.use(errorHandler);

module.exports = router;