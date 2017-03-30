const Koa = require("koa2");
import reqFitter from './apiFitter'
import router from "./routers/index"

//创建App实例
const app = new Koa();

app.use(reqFitter('^/api'));

router(app);

app.listen(3000, () => {
    console.log("listen in 3000")
});