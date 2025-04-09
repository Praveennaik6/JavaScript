// let a=10
// let b=20
// c=a+b
// console.log(c)


// let n=21
// if (n%2==0){
//     console.log("Even Number")
// }
// else{
//     console.log("Odd Number")
// }


// let a=10
// let b=20
// let c=12

// if (a>b && a>c){
//     console.log("A is greater")
// }
// else if(b>a && b>c){
//     console.log("B is Greater")
// }
// else{
//     console.log("C is greater")
// }


// let string="Hello"
// palindrome=string[-1]

// console.log(palindrome)

// let Number=12
// let result=1
// for(let i=2;i<=Number;i++){
//     result*=i
    
// }

// console.log(result)

// let num=parseInt(prompt("ENter the number to multiplication table"))
// for (let i=1;i<=10;i++){
//     console.log(`${num} * ${i}=${num*i}`)
// }

// let string="hello"
// let count=0
// let vowels="aeiou"
// for (let char of string){
//     if(vowels.includes(char))
//         count++
// }

// console.log(count)


// function Prime(num){
// if (num<2){
//     return false
// }

// for(let i=2;i<=Math.sqrt(num);i++){
//     if (num%i==0){
//        return false
// }
// }
//     console.log(num,"is a Prime")
// }

// console.log(Prime(13))


let array=[2,3,4,6,7]
sum=0
for (let i of array){
sum=sum+i
}
console.log(sum)