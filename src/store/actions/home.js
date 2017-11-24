import * as types from '../action-types'
import {getSlider,getItem} from '../../api/home'
export default {
    getSlider(){
        return dispatch=>{
            getSlider().then(res=>{
                dispatch({
                    type:types.GETSLIDER,
                    payload:res
                })
            })
        }
    },
    getIteml(){
        return (dispatch,getState)=>{
            getItem().then(res=>{
                dispatch({
                    type:types.GETITEM,
                    payload:res,
                })
            })
        }
    },
    getItem(){
        return (dispatch,getState)=>{
            getItem().then(res=>{
                let item=getState().home.item
                dispatch({
                    type:types.GETITEM,
                    flag:false,
                    payload:item
                })

                console.log(item);
               setTimeout(()=>{
                   dispatch({
                       type:types.GETITEM,
                       payload:[...item,...res],
                       flag:true
                   })
               },600)

            })
        }
    },
}