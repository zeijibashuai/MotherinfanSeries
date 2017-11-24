import * as types from '../action-types'
import {is} from '../../api/list'
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
   }
}