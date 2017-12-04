import * as types from '../action-types';
import 'moment/locale/zh-cn'

let init={
    code:1,
    user:'',
    iii:[
        {li: "亲，你还没有记录baby的成长呢", lim:[], time: new Date},
        {li: "从现在开始快快记录吧~~~", lim: ['https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1512378706&di=b6a3c5c0ea96135b741528c9c46e4254&src=http://pic34.photophoto.cn/20150115/0005018344184276_b.jpg'], time:new Date}]
}
let fg=0
export default function (state=init,action) {
    if(action.type==types.IS){
        if(action.payload.code==0){
            if(action.payload.main.length>0){
                fg=fg+1;
            }
            if(fg==0){
                return {
                    ...state,
                    code:action.payload.code
                };
                fg=fg+1;
            }else{
                return {
                    ...state,
                    code:action.payload.code,
                    user:action.payload.username,
                    iii:[...action.payload.main],
                }
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