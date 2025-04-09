
//3. return an object from function
// function exmp()
// {
//     let car={
//         car:"BMW",
//         cost:65,
//         milage:7.8

//     }
// return car
// }


// console.log(exmp()) 


function exmp(func){
    func(a,b)
}

function add(a,b){
    console.log(a+b)
}

exmp(add)