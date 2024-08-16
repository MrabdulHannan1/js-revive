// // count number of strings

// // const count={};
// // function countchar(str){
// //     for (let i=0;i<str.length;i++){
// //     const char=str[i]

// //     if (count[char])
    
// //     {
// // count[char]++;
// //     }
// //     else {
// // count[char]=1
// //     }
// //     }
// //     return count;
// // }

// // const name ="hanan" ;
// // const testcount=countchar(name)
// // console.log(testcount);

// //check if number is palindrome or not

// let num= 1213;
// let reversenum=0;
// let temp=num;
// let digit;
// while (temp!==0){
//     digit=temp%10;
//     reversenum=(reversenum*10)+digit;
//     temp=Math.floor(temp/10);

// }
// if(num===reversenum)
//     console.log("number is palindrome");
// else
// console.log("number is not palindrome");



// let str="abdul hannan"
// let count={};
// function strcount(str){
// for (let i=0;i<str.length;i++)
//     {
//         const char=str[i];
//         if (count[char]){
//             count[char]++;
//         }
//         else
//         count[char]=1
// }
// return count;
// }
// console.log(
//         strcount(str)
// )

////////////objects///////////
  
// // console.log(person.name)

// // //object destructuring

// // const {name,age,gender} =person

// // console.log(gender)


// const hannan= person.keys();
// 

// let arr=[1,2,3,45,4,5,6,5,7]

// // let arr2=["hanann","hanajkn","han5nn"]
// //  const ar3 =[...arr,...arr2];
// //let count={};

// // for (let i=0;i<arr.length;i++)
// // {
// //     const num=arr[i];
// //     if(count[num]=!count){
// //         count[num]++;
// //     }
// // }
// arr.push("hannan")
//  console.log(arr)


// console.log(arr.length) 

// let person = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//     console.log("Hello, my name is " + this.name + " ");
//     }
//     };
//     person.greet(); // Output: Hello, my name is John.

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,3))

// const sume =sum((a,b)=>a+b);
//  console.log(sume(5,6))

// const greet=()=>console.log("hello arow")
// greet()

//hoc highr order functions

let arr=[1,2,3,3,4,3,2,]

const mapped=arr.map((num)=>num*2);
const slicedd=arr.filter((num)=>num%2==0)
const reduced=arr.reduce((acc,num)=>acc+num,0)
console.log(slicedd)
console.log(mapped);
console.log(reduced);
