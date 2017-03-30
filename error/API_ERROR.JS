import errInfo from './apiErrorInfo'

class ApiError extends Error{
    constructor(errorName){
        super();
        let errorInfo = errInfo.getErrorMsg(errorName);
        this.errorInfo = errorInfo;
    }
}

export default ApiError;