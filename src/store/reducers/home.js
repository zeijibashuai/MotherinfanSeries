import * as types from '../action-types'

let imglist={list:[],item:[],flag:true};
export default function (state=imglist,action) {
   if(action.type==types.GETSLIDER){
       return {
           ...state,
           list:action.payload
       }
   }
    if(action.type==types.GETITEM){
        return {
            ...state,
            flag:action.flag,
           item:action.payload
        }
    }
   return state
}