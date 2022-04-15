const KoaRouter = require ("koa-router");
const bodyParser = require ("koa-bodyparser");

const imported = require ("./products");


const router = new KoaRouter();

router.use(bodyParser());

router.prefix("/api/v1");

router.get("/addProducts", addProduct);
router.post("/addNewProduct", newProduct )


async function addProduct (ctx) {
    await ctx.render("add_product"); 
};


async function newProduct(ctx) {

    let products = imported.products;
    let newProd = ctx.request.body;
    newProd.id = (imported.products.length+1);
    products.push(newProd);

    console.log(products.length);
    ctx.redirect("/api/v1/getProducts");

};

module.exports = router;