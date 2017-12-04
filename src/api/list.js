import {get,post} from './root'
export function is(){
    return get('/is')
}
export function Upd(data){
    return post('/jiuju',data)
}