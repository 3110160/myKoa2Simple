import Router from "koa-router"
const router = Router();

const APIPREFIX = 'api';

import { save } from "../controllers/index"

export default function(app) {
	router.get(APIPREFIX+"/",async(ctx,next)=>{
        ctx.response.body = {
            'name':'www'
        };
		await next();
	});
	router.get(APIPREFIX+'/index',async(ctx,next)=>{
        ctx.response.type = "text/html";
        ctx.response.body = "<h1>Index</h1>";
        await next();
    });
    router.get(APIPREFIX+'/save',save);
	app
        .use(router.routes())
		.use(router.allowedMethods());
}