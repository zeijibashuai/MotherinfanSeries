import * as types from '../action-types';
import 'moment/locale/zh-cn'

let init={
    code:1,
    user:'',
    iii:[]
}
export default function (state=init,action) {
    if(action.type==types.IS){
        if(action.payload.code==0){
            return {
                ...state,
                code:action.payload.code,
                user:action.payload.username,
                iii:[...action.payload.main],
            }
        }else{
            return{
                ...state,
                code:action.payload.code,
                user:action.payload.username
            }
        }

    }
    if(action.type==types.UPD){
        return{
                ...state,
                iii:[...action.payload.main],
            }
    }
    return state

}