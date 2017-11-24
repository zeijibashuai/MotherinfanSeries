import * as types from '../action-types'

let init={
    code:1,
    user:''
}
export default function (state=init,action) {
    if(action.type==types.IS){
        console.log(action,'qqqqqqqqqqqqqqqqqqqqqqqqq');
        return {
            ...state,
            code:action.payload.code,
            user:action.payload.username
        }
    }
    return state

}