import {get,post} from './root';
export function Up(data) {
    return post('/up',data)
}
export function In(data) {
    return post('/in',data)
}
export function validate() {
    return get('/validate')
}
export function oout(data) {
    return post('/out',data)
}
export function cimg(data) {
    return post('/cimg',data)
}
export function is() {
    return get('/is')
}
