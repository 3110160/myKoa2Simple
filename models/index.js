import { Teacher } from "../schema/index"

export async function toSaveTeacherModel(option) {
    let msg;
    console.log("toSave");
    let teacherInfo = {
        name : option.name
    };
    let teacher = new Teacher(teacherInfo);
    let result = await teacher.save();
    if(result){
        console.log("添加成功");
        msg = "添加成功";
    }else {
        console.log("添加失败");
        msg = "添加失败";
    }
    return msg;
}