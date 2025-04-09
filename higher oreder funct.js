// function add(a,b){
//     console.log(a+b)
// }
// console.log(add.name)
// console.log(add.length)

// let add2
// add2=add
// console.log(add2.name)
// console.log(add2.length)


// call back function

function exmp(func){ // This function is called as higher order function
    console.log(func.name)
    func(10,20)
}

function add(a,b){ // This function is called as call back function
    console.log(a+b)
}

exmp(add)