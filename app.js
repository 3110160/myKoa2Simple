const Koa = require("koa2");
import router from "./routers/index"
//创建App实例
const app = new Koa();
app.use(async(ctx, next) => {
    console.log(`URL:${ctx.request.url}请求方法：${ctx.request.method}`);
    await next();
});

app.use(async(ctx, next) => {
    let start = new Date().getTime();
    await next();
    let end = new Date().getTime();
    let ms = end - start;
    console.log(`一轮 消耗：${ms}ms`);
});
router(app);

app.listen(3000, () => {
    console.log("listen in 3000")
});