const KoaRouter = require ("koa-router");

const router = new KoaRouter();

let products = [

    {id:1, name:"nike", price:100, photo:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c368aa69-428f-421f-a59a-cc6d1c83460d/af-1-1-mens-shoes-kcdPxn.png", quantity:10},
    {id:2, name:"new balance", price:145, photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejQ5sXrjieN4a_uzR3jhjkATPPeKarNMhYg&usqp=CAU", quantity:5},
    {id:3, name:"adidas", price:58, photo:"https://freepngimg.com/save/9298-adidas-shoes-png-clipart/1024x768", quantity:5},
    {id:4, name:"nike", price:100, photo:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c368aa69-428f-421f-a59a-cc6d1c83460d/af-1-1-mens-shoes-kcdPxn.png", quantity:10},
    {id:5, name:"new balance", price:145, photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejQ5sXrjieN4a_uzR3jhjkATPPeKarNMhYg&usqp=CAU", quantity:5},
    {id:6, name:"adidas", price:58, photo:"https://freepngimg.com/save/9298-adidas-shoes-png-clipart/1024x768", quantity:5},
    {id:7, name:"nike", price:100, photo:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c368aa69-428f-421f-a59a-cc6d1c83460d/af-1-1-mens-shoes-kcdPxn.png", quantity:10},
   
];

router.prefix("/api/v1");
router.get("/getProducts", getProducts);
router.get("/productDetails/:id", productDetails);
router.get("/deleteProduct/:id", deleteProduct);


async function getProducts (ctx) {
    await ctx.render("products", {prod:products});       
};


async function productDetails (ctx) {

    let currentProduct  =  products.find((item) => item.id == ctx.params.id );
    await ctx.render("product_describtion", {currentProduct});
};


async function deleteProduct (ctx) {
    products =  products.filter(item => item.id != ctx.params.id);
    await ctx.redirect("/api/v1/getProducts");
};


module.exports = {router, products};

