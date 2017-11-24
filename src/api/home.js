import {get,post} from './root'

export function getSlider(){
    return get('/sliders')
}
export function getItem(){
    return get('/getItem')
}