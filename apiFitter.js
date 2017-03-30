import ApiError from './error/API_ERROR'

const resFormatter = (ctx)=>{
    if(ctx.body){
        ctx.body = {
            'code':1,
            'msg':'success',
            'data':ctx.body
        }
    }else {
        ctx.body = {
            'code':1,
            'msg':'success'
        }
    }
};

const urlFitter = (pattern)=>{
    return async (ctx,next)=>{
        let reg = new RegExp(pattern);
        try{
            await next();//先让其进入路由
        }catch (error){
            //内部手动抛出的 api 异常
            if(error instanceof ApiError && reg.test(ctx.originalUrl)){
                ctx.status = 200;
                ctx.body = error.errorInfo;
            }
            throw error;
        }
        if(reg.test(ctx.originalUrl)){
            resFormatter(ctx);
        }else {
            ctx.body={
                code:-100,
                msg:'请检查api!'
            }
        }
    }
};

export default urlFitter;