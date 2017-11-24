import * as types from '../action-types'
import {Up,In,validate,oout,cimg} from '../../api/user';
import {push,goBack} from 'react-router-redux'
export default {
    Up(data){
        return dispatch=>{
            Up(data).then(payload=>{
                dispatch({
                    type:types.UP,
                    payload
                })
                let {code}=payload;
                if(code==0){
                    dispatch(push('/in'))
                }
            });
        }
    },
    In(data){
        return dispatch=>{
            In(data).then(payload=>{
                console.log(payload,'111111111111111');
                dispatch({
                    type:types.IN,
                    payload
                })
                let {code}=payload;
                if(code==0){
                    dispatch(push('/personal'))
                }
            })
        }
    },
    validate(){
        return dispatch=>{
            let asd=validate();
            console.log(asd);
            asd.then(payload=>{
                console.log(payload);
                dispatch({
                    type:types.VALIDATE,
                    payload:payload
                })
            });
        }
    },
    oout(oldimg){
        return dispatch=>{
          oout().then((res)=>{
              console.log(res,"ggggggggggggggggg");
              dispatch({
                  type:types.OOUT,
                  payload:res,
                  img:oldimg
              })
              setTimeout(()=>{
                  dispatch({
                      type:types.OOUTT,
                  })
              },1000)
          })
        }
    },
    cimg(data){
        return dispatch=>{
          cimg(data).then((res)=>{
              console.log(res,"ggggggggggggggggg");
              dispatch({
                  type:types.CIMG,
                  payload:res
              })
              dispatch(push('/personal'))
          })
        }

    }
}