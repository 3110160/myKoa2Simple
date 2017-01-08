import Router from "koa-router"
const router = Router();
import { save } from "../controllers/index"
export default function(app) {
	router.get("/",async(ctx,next)=>{
		console.log("哈哈");
        ctx.response.type = "text/html";
        ctx.response.body = "<h1>呵呵呵呵</h1>";
		await next();
	});
	router.get('/index',async(ctx,next)=>{
        ctx.response.type = "text/html";
        ctx.response.body = "<h1>Index</h1>";
        await next();
    });
    router.get('/save',save);
	app
        .use(router.routes())
		.use(router.allowedMethods());
}