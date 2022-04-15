const koa = require("Koa");
const path = require("path");
const router = require("./index");
const render = require("koa-ejs");

const app = new koa();

app.use(router.routes());

render(app, {

    root: path.join(__dirname, 'views'),
    layout: "",
    viewExt: "html",
    cache: false,
    debug: false,

});

router.get("/", (ctx) => ctx.redirect("/api/v1/getProducts") );
app.listen(3000, () => console.log("Server started") );