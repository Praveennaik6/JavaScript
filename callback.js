// function circleArea(radius){
//     return Math.PI*radius*radius
// }
// function squareArea(side){
//     return side*side
// }
// function TriangleArea(side){
//     return (Math.sqrt(3)/4)*side*side
// }

// function calculateArea(value,callback){
//     console.log(callback(value))
// }

// console.log(calculateArea)


// Arrays in JS
// let arr=["Rohit","Rama",true,10.5,10]
// for(let i=0;i<5;i++){
//     console.log(arr[i])
// }

//Empty array
// let arr=new Array(5)
// arr[0]=2
// arr[1]=3
// arr[2]=4
// arr[3]=5
// arr[4]=6
// for(let i=0;i<5;i++){
//     console.log(arr[i])
// }


let array=[10,20,30,40]
//Adding the element at the begining at the end
array.push(50)
console.log(array)
///Adding the element at the starting
array.unshift(70)
console.log(array)

//removing element at the end
array.pop()
console.log(array)

let x=array.shift()
console.log(x)

let remove=array.slice(2,1)
console.log(remove)
