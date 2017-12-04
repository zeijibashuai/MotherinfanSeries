import * as types from '../action-types'
import {is,Upd} from '../../api/list'
import {push,goBack} from 'react-router-redux'
export default {
   is(){
           return dispatch=>{
               is().then(res=>{
                   dispatch({
                       type:types.IS,
                        payload:res
                   })
               })
           }
   },
    pusha(a){
       return dispatch=>{
           if(a==1){
               dispatch(push('/personal'))
           }else if(a==2){
               dispatch(push('/'))
           }
       }
    },
    upd(data){
        return dispatch=>{
            Upd(data).then(res=>{
                dispatch({
                    type:types.UPD,
                    payload:res
                })
            })
        }
    },
}