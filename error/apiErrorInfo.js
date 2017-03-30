const apiErrorInfo = {};

//错误类型
apiErrorInfo.UNKNOWNERROW = 'unknownError';
apiErrorInfo.INVALIDUSER = 'InvalidUser';

//错误信息的 map
const errorMap = new Map();

errorMap.set(apiErrorInfo.UNKNOWNERROW,{code:-1,msg:'未知错误'});
errorMap.set(apiErrorInfo.INVALIDUSER,{code:-1,msg:'用户不存在'});


apiErrorInfo.getErrorMsg = (errName)=>{
    let msg;
    if(errName){
        msg = errorMap.get(errName);
    }else msg = errName.get(apiErrorInfo.UNKNOWNERROW);
    return msg;
};

export default apiErrorInfo;