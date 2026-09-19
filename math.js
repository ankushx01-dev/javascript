const v=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(Math.PI); we cant overright PI value
// console.log(v);
const mynewObj={
    name:'achu'
    ,age:'20'
}
console.log(Object.getOwnPropertyDescriptor(mynewObj,'name'))
// Object.defineProperty(mynewObj,'name',{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(mynewObj,'name'))

//to iterate
for (const [key,value] of Object.entries(mynewObj)) {
    console.log(`${key} : ${value}`)
}