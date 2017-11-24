import * as types from '../action-types'

let initState = {
    user:null,//如果登录成功之后存放登录后的用户信息
    success:null,// 存放成功的消息
    error:null,//存放失败的消息
    img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511327265932&di=e2849f025308e3046a12d3b4526a311d&imgtype=0&src=http%3A%2F%2Fimg.dongqiudi.com%2Fuploads%2Favatar%2F2015%2F07%2F25%2FQM387nh7As_thumb_1437790672318.jpg",
    oldimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511327265932&di=e2849f025308e3046a12d3b4526a311d&imgtype=0&src=http%3A%2F%2Fimg.dongqiudi.com%2Fuploads%2Favatar%2F2015%2F07%2F25%2FQM387nh7As_thumb_1437790672318.jpg"
}
export default function (state=initState,action) {
    if(action.type==types.IN){
        var  {success,error,oldUser} = action.payload;
        console.log(oldUser,3333333333333333333333);
        if(!oldUser){
            return{
                ...state,
                user:null,
                error,
            }
        }
        return {
            ...state,
            success,
            error,
            user:oldUser,
            img:oldUser.img
        };
    }
    if(action.type==types.UP){
        var {success,error} = action.payload;
        return {
            ...state,
            success,
            error
        };
    }
    if(action.type==types.VALIDATE){
        let {code,user}=action.payload;

        if(code==0&&user){
            return {...state,user,img:user.img}
        }else {
            return state
        }
    }
    if(action.type==types.OOUT){
        var  {success} = action.payload;
      return{
          ...state,
          user:null,
          img:action.img,
          success
      }
    }
    if(action.type==types.OOUTT){
        return{
            ...state,
            user:null,
            success:null
        }
    }
    if(action.type==types.CIMG){
        return{
            ...state,
            img:action.payload.img
        }
    }
    return state
}