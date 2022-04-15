const KoaRouter = require ("koa-router");
const router = new KoaRouter();


const productsRouter = require ("./routes/products");
const addProductsRouter = require ("./routes/addProduct");


router.use(productsRouter.router.routes());
router.use(addProductsRouter.routes());

module.exports = router;


