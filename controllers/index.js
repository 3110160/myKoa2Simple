import { toSaveTeacherModel } from "../models/index"

export async function save(ctx,next) {
   let msy = await toSaveTeacherModel({name:"哈哈哈"});
    ctx.body = msy;
    await next();
}
