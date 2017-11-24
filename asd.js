

let set=new Set([1,2,3,4,5,61,1,1,1,]);
let ary=[]
for (let  key of set){
    console.log(key);
    ary.push(key)
}
console.log(set);
console.log(ary);